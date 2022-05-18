# Requirement

## About

This interview test will be focusing on your comprehensive front-end skills for Atemnet's demand. It's based on technologies and practices that our team is currently using.

Atemnet's major products is a chatting app. For the native of such type of app we'll be looking forward to build a heavily state holding and front-back-end interactive application with fast responsive user status alignment.

## Test

In this test you'll be asked to implement a single-page mortgage form app which will collect a customer's personal financial information and calculate the final mortgage plan he'll be applying from Bank of Atemnent. If possible, you may also mock the interaction with the backend.

Here's an example of a mortgage calculator [https://aib.ie/our-products/mortgages/mortgage-calculator?gclid=Cj0KCQjwl7qSBhD-ARIsACvV1X0iarzK2U4wrVOT4grZqmbNhccw2Wt92MAOIZyzFXGvXEezk1PIvDkaAlxREALw_wcB&gclsrc=aw.ds] (click **Calculate** to find the page).

![Example](/requirement/first-page.png)

![Example](/requirement/last-page.png)

You can also use another financial institution's calculator as your reference to help your building your app.

**You're not being asked to implement it completely the same.** We're looking for minimum following requirements to be done:

1. Multiple pages form with a progress bar
2. Dynamic calculation on the final page that giving the user options to decide final mortgage plan by choosing:
2.1. Years to borrow
2.2. How much his buying and borrowing

You may define the calcuation parameters such as interest rate of your calculation.

## More Info

There might be some information about Atemnet's app useful to you:

1. We're using React with Redux and a comprehensive MVVM practice
2. We centralize states' management across the whole app in the same folder
3. Our backend is using [CQRS pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs#:~:text=CQRS%20stands%20for%20Command%20and,performance%2C%20scalability%2C%20and%20security.)
4. We're using [Bootstrap](https://getbootstrap.com/)

It's good to follow our practice but also an option if you have a better idea of implementation. We'll take the entire app's implementation to validate the result.

## Submit Your Answer

Please zip the entire folder of your app without `node_modules` folder.
