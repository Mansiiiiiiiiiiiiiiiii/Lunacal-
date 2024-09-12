# About Me & Gallery Widget

This project implements a clean, user-friendly interface with two key widgets: **About Me** and **Gallery**. The widgets are designed for easy navigation, smooth transitions, and interactive elements. The project showcases a responsive design with interactive tabs and image gallery functionality.

## Features

### 1. About Me Widget
- **Tab Navigation**: Switch between **About Me**, **Experience**, and **Recommended** tabs.
- **Smooth Transitions**: Sliding effects for content transitions between tabs.

### 2. Gallery Widget
- **Dynamic Image Upload**: Users can upload images directly from their desktop into the gallery.
- **Black and White to Color Hover Effect**: Images appear in grayscale by default and transition to full color with a zoom effect when hovered.
- **Image Navigation**: Navigate through the gallery using left and right arrows.
- **Add Image Button**: Allows users to add more images to the gallery (with a limit of 3 images initially).
- **Responsive Design**: The widgets are responsive and adapt to various screen sizes (laptops, tablets).

## Technologies Used

- **HTML5**: For structuring the layout.
- **CSS3**: For styling, including responsiveness and animations.
- **JavaScript**: For dynamic tab switching, image uploads, and gallery navigation.

## Files Structure

```plaintext
.
├── lunacal.html         # Contains the HTML structure for the About Me and Gallery widgets.
├── style.css          # Styles for both the About Me and Gallery widgets, including responsiveness and effects.
└── script.js          # JavaScript file for handling tab switching, gallery functionality, and hover effects.
```

## Setup and Usage

1. **Clone the repository**:  
   Clone this project to your local machine using:
   ```bash
   git clone https://github.com/Mansiiiiiiiiiiiiiiiii/Lunacal-
   ```

2. **Open the Project**:  
   Open the `lunacal.html` file in your browser.

3. **Adding Images**:  
   In the gallery widget, click on the `+ Add Image` button to upload images. You can upload up to 3 images initially.

4. **Navigate the Tabs**:  
   Switch between tabs in the About Me widget by clicking the tab names. The content will smoothly transition.

## Customization

### Font Size and Spacing
You can modify the font size and spacing for the tab names (About Me, Experience, Recommended) by adjusting the following styles in `style.css`:

```css
.tabs li {
    padding: 15px 30px; /* Adjust spacing */
    font-size: 16px; /* Adjust font size */
}
```

### Image Limit
You can change the maximum number of images in the gallery by modifying the `maxImages` variable in `script.js`:

```javascript
const maxImages = 3; // Adjust this number to change the limit
```

## Responsive Design

This project has been optimized for multiple screen sizes:
- **Laptops**
- **Tablets**

The widgets adjust accordingly to maintain user experience across all devices.

## Contributing

Feel free to open a pull request or issue for improvements or bug fixes.

Enjoy using the About Me & Gallery Widget! 

![Screenshot (119)](https://github.com/user-attachments/assets/9fc01c1e-8d9c-401d-bd03-9326df2c8c0d)
