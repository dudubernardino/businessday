<h2 align="center">
  Business Day Project
</h2>

<p align="center">💼📊 A lib that calculates a deadline considering only working days business days</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 💇🏻‍♂️ About the project

This project contains functions that assist in the calculation of deadlines on working days

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [Date-fns](https://date-fns.org/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Install lib**

```bash
$ yarn add businessday-workingdays
```

**Available methods**

```js
getDeadline(new Date(), 5);

// This method returns the added informed date of 5 business days
```

```js
getdifferenceInBusinessDays(new Date(), 5);

// This method returns the number of working days between the end date and the one informed
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork dudubernardino/businessday
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd businessday

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Eduardo Bernardino 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/dudubernardino/)
