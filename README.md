![HIS logo](https://raw.githubusercontent.com/Nicopinsan21/IT332-Herbal-Information-System/main/src/assets/banner.jpg)

# Herbal Information System
An ionic application called Herbal Information System can be used to find different kinds of herbal medicines.

## Features

* **Splash screen** - For the opening part of the application, the system will splash before seeing the entire content of the application.
* **Search** - The application has a search bar button so the user can easily find the herbal medicine they want to know about by searching for it manually.
* **Slideshow picture** - In the upper part of the home page of the application, there is a slide show picture that shows a quotes about the importance of herbals in our health.
* **Viewing of selected herbal** - The user can select and view the herbal medicine that they choose to view, and it contains the description, picture, and uses of that herbal medicine.
* **Picture with descriptions and title of item** - Each herbal medicine, like herbal plants, dry leaves, or seeds, has a short description and a picture, with their uses and preparation, to easily identify those herbal medicines that they want to know about.
* **Filter** - The user can filter the categories by clicking the filter icon on the homepage and selecting the kind of herb they want to show. After filtering the herbal plant type, the user can see the result of the herbal plants that they are looking for.
* **Favorites** - The user can have a permission to have their own favorites of herbal medicine that they want to save in favorites. After adding the favorite item of herbal medicine, it shows a badge that tells that the user has successfully added a favorite item to the favorite.
* **Sort** - By clicking the sort icon on the right side of the homepage, the user can sort the categories from A-Z or Z-A alphabetically to locate the product they're looking for.



### **Usage**
________________
#### Installation
________________
Access to directory

```
$ cd IT332-Herbal-Information-System
```

Install the dependencies
```
npm install
```

__________
#### Serve
__________
To serve in the browser
```
ionic serve --lab
```
> :warning: **If you are request to install ionic lab**: Press 'Y'

__________________
#### Add Platforms
__________________
First you need to build the project
```
$ ionic build
```
##### For Android
```
$ ionic capacitor build android
```
##### For iOS
```
$ ionic capacitor build ios
```

__________________
#### Run Platforms
__________________
##### For Android
```
$ npx cap open android
```
##### For iOS
```
$ npx cap open ios
```
