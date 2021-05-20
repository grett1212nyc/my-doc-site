---
id: Sklearn-Binary-Classification
title: Binary Classification using Scikit-Learn
description: Multiple Estimators and Hyperparameter Optimization using a Heart Disease dataset
date: 2020-06-05
---

---

This blog covers Binary classification on a heart disease dataset.  
After preprocessing the data we will build multiple models with different estimators and different hyperparemeters to find the best performing model.

## Get the data ready

As an example dataset, we'll import heart-disease.csv. This file contains anonymised patient medical records and whether or not they have heart disease or not.

```python
import pandas as pd
import numpy as np
heart_disease = pd.read_csv('drive/My Drive/Colab Notebooks/heart-disease.csv')
heart_disease.head()
```

![datset1](/img/docimages/BinaryClass/dataset1.jpg)

Here, each row is a different patient and all columns except target are different patient characteristics. target indicates whether the patient has heart disease (target = 1) or not (target = 0).

## Exploring the data

```python
import seaborn as sns
import matplotlib.pyplot as plt

sns.set_style('whitegrid')
plt.figure(figsize=(8, 4))
sns.countplot(x='target',hue='sex',data=heart_disease,palette='rainbow')
plt.legend(title='Sex', loc='upper left', labels=['Female', 'Male'])
```

![plot1](/img/docimages/BinaryClass/plot1.jpg)

```python
# Age distribution
plt.figure(figsize=(8, 4))
sns.distplot(heart_disease['age'],kde=False,color='darkred',bins=30)
```

![plot2](/img/docimages/BinaryClass/plot2.jpg)

## Shuffel the dataset

```python
# Shuffel the dataset to make sure we get an equal distribution of the data before splitting into train and test sets
heart_disease = heart_disease.sample(frac=1)
heart_disease.head()
```

## Split the data into training and test sets

```python
# Split the data into training and test sets
from sklearn.model_selection import train_test_split

# Create X (all the feature columns)
X = heart_disease.drop("target", axis=1)
# Create y (the target column)
y = heart_disease["target"]

X_train, X_test, y_train, y_test = train_test_split(X, y,  test_size=0.2, random_state=0)

# View the shape of the data
X_train.shape, X_test.shape, y_train.shape, y_test.shape
# ((242, 13), (61, 13), (242,), (61,))
```

## Standardization

```python
# Scale values to numbers between 0 and 1 ( shape remains the same)
from sklearn.preprocessing import MinMaxScaler
sc=MinMaxScaler()
X_train_scaled = sc.fit_transform(X_train)
X_test_scaled = sc.transform(X_test)
X_train_scaled.shape
```

## Build the model with the best estimator

This is often referred to as model or clf (short for classifier) or estimator (as in the Scikit-Learn) documentation.  
Hyperparameters are like knobs on an oven you can tune to cook your favourite dish.

```python
# Here we are using 7 different estimators with Grid search to find the best model.

from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import LinearSVC
from sklearn import svm
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import SGDClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier

from sklearn.metrics import accuracy_score
from sklearn.model_selection import GridSearchCV

# ignore ConvergenceWarnings
from  warnings import simplefilter
from sklearn.exceptions import ConvergenceWarning
simplefilter("ignore", category=ConvergenceWarning)

models = [
    { "estimater": KNeighborsClassifier(),
      "params": {
          "n_neighbors": [25,30,35,45],
          "weights": ['uniform','distance'],
          "leaf_size": [25,30,35],
          "p": [1,2,3],
        }
    },
    { "estimater": DecisionTreeClassifier(),
      "params": {
          "criterion": ['gini','entropy'],
          "splitter": ['best','random'],
          "max_depth": [None,90,95,100],
          "max_features": [None, "auto","sqrt","log2"],
          "random_state": [42]
      }
    },
    { "estimater": MultinomialNB(),
      "params": {
          "fit_prior": [True, False]
      }
    },
    { "estimater": LinearSVC(),
      "params": {
          "loss": ['hinge','squared_hinge'],
          "multi_class": ['ovr', 'crammer_singer'],
          "fit_intercept": [True, False],
          "random_state": [42],
          "max_iter": [900, 1000, 1100]
      }
    },
    { "estimater": svm.SVC(),
      "params": {
          'C': [0.1,1, 10, 100, 1000], 'gamma': [1,0.1,0.01,0.001,0.0001], 'kernel': ['rbf']
      }
    },
    { "estimater": RandomForestClassifier(),
      "params": {
      "criterion": ['gini','entropy'],
      "bootstrap": [True, False],
      "max_depth": [85,90,95,100],
      "max_features": ['sqrt','log2'],
      "n_estimators": [60, 80, 90],
      "random_state": [42]
      }
    },
    { "estimater": SGDClassifier(),
      "params": {
          "loss": ['hinge','log','perceptron'],
          "penalty": ['l2', 'l1'],
          "alpha": [0.0001, 0.0003, 0.0010],
          "early_stopping": [True],
          "max_iter": [1000, 1500],
          "random_state": [42]
      }
    }
]

column_names = ["KNeighbors", "DecisionTree", "MultiNB", "SVC", "SVM", "RFC", "SGDClassifier"]
entries = []

highest_acc = 0
best_model = None

for model in models:
  print(model["estimater"])

  # Create model
  clf = model["estimater"]
  # Instantiate the grid search model
  grid_search = GridSearchCV(estimator = clf, param_grid = model["params"],
                            cv = 5)

  # Fit the model
  grid_search.fit(X_train_scaled, y_train);

  # Make a prediction on the test split to find model accuracy
  predicted = grid_search.predict(X_test_scaled)
  acc = accuracy_score(predicted, y_test)
  entries.append(acc)

  print(grid_search.best_params_)

  # If model have the highest accuracy, it's out best model
  if acc > highest_acc:
    highest_acc = acc
    best_model = grid_search
```

## Plotting each models performance

```python
import seaborn as sns
import matplotlib.pyplot as plt
plt.style.use('ggplot')

df = pd.DataFrame({"Estimater": column_names,
                   "Accuracy": entries
                  })

plt.figure(figsize=(8, 4))
sns.barplot(x='Estimater', y='Accuracy', data=df)
print(df)
```

![plot3](/img/docimages/BinaryClass/plot3.jpg)

## Evaluating the model and make predictions

Now we've made some predictions, we can start to use some more Scikit-Learn methods to figure out how good our model is.  
Each model or estimator has a built-in score method. This method compares how well the model was able to learn the patterns between the features and labels. In other words, it returns how accurate your model is.

First we create an evaluation function to output all the needs metrics

```python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

def evaluate_preds(y_true, y_preds):
    """
    Performs evaluation comparison on y_true labels vs. y_pred labels
    on a classification.
    """
    accuracy = accuracy_score(y_true, y_preds)
    precision = precision_score(y_true, y_preds, average='micro')
    recall = recall_score(y_true, y_preds, average='micro')
    f1 = f1_score(y_true, y_preds, average='micro')
    metric_dict = {"accuracy": round(accuracy, 2),
                   "precision": round(precision, 2),
                   "recall": round(recall, 2),
                   "f1": round(f1, 2)}

    return metric_dict
```

Now we make predictions using the test data to see how the model performs

```python
predicted = best_model.predict(X_test_scaled)
evaluate_preds(y_test, predicted)
"""
{'accuracy': 0.87, 'f1': 0.87, 'precision': 0.87, 'recall': 0.87}
"""
```

The Jupyter Notebook can be found here, [GitHub](https://github.com/snymanje/Multi-Estimator-Binary-Classification-with-Hyperparameter-Optimization./blob/master/Multi_Estimator%2C_Binary_Classification_with_Hyperparameter_Optimization.ipynb)
