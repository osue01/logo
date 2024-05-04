
  //   //user text
  //   var user_text = "";
  //   if (answers.text.length > 0 && answers.text.length < 4) {
  //     // 1-3 chars, valid entry
  //     user_text = answers.text;
  //   } else {
  //     // 0 or 4+ chars, invalid entry
  //     console.log(
  //       "Invalid user text field detected! Please enter 1-3 Characters"
  //     );
  //     return;
  //   }
  //   console.log("User text: [" + user_text + "]");
  //   //user font color
  //   user_font_color = answers["text-color"];
  //   console.log("User font color: [" + user_font_color + "]");
  //   //user shape color
  //   user_shape_color = answers.shape;
  //   console.log("User shape color: [" + user_shape_color + "]");
  //   //user shape type
  //   shape_type = answers["pixel-image"];
  //   console.log("User entered shape = [" + shape_type + "]");

  //   //user shape
  //   let user_shape;
  //   if (shape_type === "Square" || shape_type === "square") {
  //     user_shape = new Square();
  //     console.log("User selected Square shape");
  //   } else if (shape_type === "Circle" || shape_type === "circle") {
  //     user_shape = new Circle();
  //     console.log("User selected Circle shape");
  //   } else if (shape_type === "Triangle" || shape_type === "triangle") {
  //     user_shape = new Triangle();
  //     console.log("User selected Triangle shape");
  //   } else {
  //     console.log("Invalid shape!");
  //   }
  //   user_shape.setColor(user_shape_color);

  //   // Create a new Svg instance and add the shape and text elements to it
  //   var svg = new Svg();
  //   svg.setTextEl(user_text, user_font_color);
  //   svg.setShapeEl(user_shape);
  //   svgString = svg.render();

  //   //Print shape to log
  //   console.log("Displaying shape:\n\n" + svgString);
  //   //document.getElementById("svg_image").innerHTML = svgString;

  //   console.log("Shape generation complete!");
  //   console.log("Writing shape to file...");