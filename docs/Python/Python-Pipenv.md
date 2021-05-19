---
id: Python-Pipenv
title: Python - Pipenv Cheat Sheet
description: Settting up pipenv
---

## Install pipenv

```python
pip3 install pipenv
```

## Activate

```python
pipenv shell
```

## Check version of Python

```pythin
python --version
```

## Check path

```python
python
>>> import sys
>>> sys.executable
quit()
```

## Install a package

```python
pipenv install camelcase
```

## Check local packages

```python
pipenv lock -r
```

## Uninstall a package

```python
pipenv uninstall camelcase
```

## Install a dev package

```python
pipenv install nose --dev
```

## Install from requirements.txt

```python
pipenv install -r ./requirements.txt
```

## Check security vulnerabilities

```python
pipenv check
```

## Check dependency graph

```python
pipenv graph
```

## Ignore pipfile

```python
pipenv install --ignore-pipfile
```

## Set lockfile - before deployment

```python
pipenv lock
```

## Exiting the virtualenv

```python
exit
```

## Run with pipenv

```python
pipenv run *
```
