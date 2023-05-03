import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Some Questions</h2>
            <p>
                <span>Tell us the differences between uncontrolled and controlled components.
                </span>
                In the context of a software system, components can be classified into two categories: uncontrolled and controlled components.

                Uncontrolled components are those that are not managed by the application or framework. They are typically created and managed by the browser or the operating system. Examples of uncontrolled components include HTML form elements like input, textarea, and select.

                On the other hand, controlled components are those that are managed by the application or framework. Their value is stored in the application state and updated via callbacks. Examples of controlled components include React input elements like TextInput and SelectInput.

                The key difference between these two types of components is that uncontrolled components store their own state internally, while controlled components store their state in the applications state. This means that with uncontrolled components, the application has limited control over the users input, while with controlled components, the application has complete control over the input.

                Controlled components are generally preferred in React applications because they provide better control and maintainability. However, there are situations where uncontrolled components are more appropriate, such as when you need to handle user input without requiring the user to submit a form.
            </p> <br></br>
            <p>
             <span>How to validate React props using PropTypes
            </span>
            React is a JavaScript library that allows you to build reusable user interface components. These components can accept input data through props (short for properties), which are essentially parameters passed to the component. Props can contain any data type, from simple strings and numbers to complex objects and arrays.

            In order to ensure that the data passed to a component through props is of the correct type and shape, React provides a built-in library called PropTypes. PropTypes allows you to validate the type and shape of props and specify whether they are required or not.

            PropTypes provides a set of predefined validators for common data types, such as string, number, boolean, array, and object. You can also define custom validators for more complex data types.
            </p> <br></br>
            <p>
                <span>Tell us the difference between nodejs and express js.</span>
                Node.js and Express.js are two popular technologies used in web development, and while they are often used together, they are not the same thing. Here are the main differences between Node.js and Express.js:

            Node.js:

            Node.js is a server-side runtime environment for JavaScript, meaning it allows JavaScript to be executed outside of the browser, on the server-side.
            Node.js is built on top of Googles V8 JavaScript engine and allows developers to write server-side applications in JavaScript.
            Node.js provides a set of built-in modules, such as the http module, which allows developers to create a web server that can listen for incoming requests and respond to them.

            Express.js:

            Express.js is a web framework built on top of Node.js, which provides a set of features and tools to make it easier to build web applications and APIs.
            Express.js provides a number of features such as routing, middleware, and templates that help developers build web applications quickly and easily.
            Express.js is highly customizable, allowing developers to use only the features they need and extend the framework with additional middleware and plugins. <br></br>
            </p>
            <p>
                <span>
                What is a custom hook, and why will you create a custom hook?
                </span>
                In React, a custom hook is a JavaScript function that starts with the prefix use and allows you to encapsulate reusable logic that can be shared across multiple components. Custom hooks allow you to abstract away complex logic, making it easier to reuse and maintain.

                Custom hooks can be created for a variety of use cases, such as:

                Abstracting complex logic: Custom hooks can be used to encapsulate complex logic that is used across multiple components. For example, if you have a set of components that need to share the same data fetching logic, you can create a custom hook that handles the data fetching and returns the data to each component that needs it.

                Simplifying component logic: Custom hooks can also be used to simplify the logic in your components. For example, if you have a component that needs to manage a state variable with complex logic, you can create a custom hook that manages the state for you and returns the state and any functions that need to modify it.

                Creating reusable abstractions: Custom hooks can be used to create reusable abstractions that can be used across multiple projects. For example, you could create a custom hook that encapsulates authentication logic, which can be used across multiple projects.
            </p> <br></br>
        </div>
    );
};

export default Blog;