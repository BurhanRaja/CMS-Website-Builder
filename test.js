function convertCssToReactStyle(cssString) {
    // Split the CSS string into individual rules
    const cssRules = cssString.split(';').filter(Boolean);
  
    // Convert each rule to a React style object
    const reactStyle = cssRules.reduce((styleObject, rule) => {
      const [property, value] = rule.split(':').map((part) => part.trim());
  
      // Convert CSS property to camelCase
      const camelCaseProperty = property.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase()
      );
  
      // Add the style to the React style object
      styleObject[camelCaseProperty] = value;
  
      return styleObject;
    }, {});
  
    return reactStyle;
  }
  
  // Example usage:
  const cssString = "font-size: 16px; color: #333; background-color: #fff;";
  const reactStyle = convertCssToReactStyle(cssString);
  
  console.log(reactStyle);