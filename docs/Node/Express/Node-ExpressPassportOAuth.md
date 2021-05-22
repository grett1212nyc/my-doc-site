---
id: Auth-in-Express-Social-Logins-jwt
title: Authentication in Express with Google and Facebook using passport and jwt
description: Wiring up authentication with Google and Facebook, an example by code
---

---

This is a code example of setting up authentication in Express with Google, Facebook and using passport and jwt's. I'm also making use of TypeScript. You can get the entire repo from here, [Github](https://github.com/snymanje/OAuth-Google-Facebook-Passport-jwt). Just clone the repo, do an npm install and add your app id and serect to the config file.

```typescript
// All required packages are imported here
import express from "express";
import passport from "passport";
import path from "path";
import GoogleStrategy from "passport-google-oauth20";
import FacebookStrategy from "passport-facebook";
import JWTStrategy from "passport-jwt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import config from "./config";

// Before you can complete the configuration for the Google and Facebook strategies
// you first need to create an application at https://developers.facebook.com/ and at
// https://console.developers.google.com/. You will need the application\client id and
// application\client secret. You also need to give both Facebook and Google your
// application redirect\callback url.

// This is the strategy setup for Google
passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: config.GoogleClientId!,
      clientSecret: config.GoogleClientSecret!,
      callbackURL: "/auth/google/callback",
    },
    (_accessToken, _refreshToken, profile, done) => {
      // In this example, the user's Google profile is supplied as the user
      // record.  In a production-quality application, the Facebook profile should
      // be associated with a user record in the application's database, which
      // allows for account linking and authentication with other identity
      // providers.
      done(undefined, profile);
    }
  )
);

// This is the strategy setup for Facebook
passport.use(
  new FacebookStrategy.Strategy(
    {
      clientID: config.FacebookClientId!,
      clientSecret: config.FacebookClientSecret!,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "email", "picture"],
    },
    (_accessToken, _refreshToken, profile, done) => {
      // In this example, the user's Facebook profile is supplied as the user
      // record.  In a production-quality application, the Facebook profile should
      // be associated with a user record in the application's database, which
      // allows for account linking and authentication with other identity
      // providers.
      done(undefined, profile);
    }
  )
);

// This is the strategy setup for JWT so that we can use tokens instead of sessions.
passport.use(
  new JWTStrategy.Strategy(
    {
      jwtFromRequest: (req) => {
        let token = null;
        if (req && req.cookies) {
          token = req.cookies.jwt;
        }
        return token;
      },
      secretOrKey: config.SessionSecret,
    },
    (jwtPayload, done) => {
      if (!jwtPayload) {
        return done("No token found...");
      }
      return done(null, jwtPayload);
    }
  )
);

// Configure Passport authenticated session persistence.
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj: any, done) => {
  done(null, obj);
});

const app = express();

// Configure view engine to render EJS templates.
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(cookieParser());
// Initialize Passport and restore authentication state.
app.use(passport.initialize());

// Function for generating jwt tokens
const generateJwtToken = (user: any) => {
  const token = jwt.sign(user, config.SessionSecret, {
    expiresIn: "7d",
  });
  return token;
};

// This is the route for initiating the OAuth flow to Google
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// This is the route for initiating the OAuth flow to Facebook
app.get("/auth/facebook", passport.authenticate("facebook", { scope: "email" }));

// This is the callback\redirect url after the OAuth login at Google.
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    const token = generateJwtToken(req.user);
    res.cookie("jwt", token);
    res.redirect("/");
  }
);

// This is the callback\redirect url after the OAuth login at Facebook.
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
    const token = generateJwtToken(req.user);
    res.cookie("jwt", token);
    res.redirect("/");
  }
);

// Navigating to the root url will ask passport to check for a valid token
app.get(
  "/",
  passport.authenticate("jwt", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    res.render("home", { user: req.user });
  }
);

// Viewing the profile page will ask passport to check for a valid token
app.get(
  "/profile",
  passport.authenticate("jwt", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    res.render("profile", { user: req.user });
  }
);

app.get("/login", (_req, res) => {
  res.render("login");
});

app.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/login");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
```
