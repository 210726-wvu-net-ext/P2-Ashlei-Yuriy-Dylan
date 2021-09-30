# Group4-Project2
## Project Description
Vehicles.com is a store for customers to review product inventory, purchase history, and buy vehicles and parts. Employees can use website to monitor inventory and process orders.

## Technology
This project uses C# along with Asp.Net Core to create the web api functionality.The front end of this webapp will be made in Angular-JS. Our data is stored using Azure Sql Server and hosted on Azure App Service. Automated testing is done using Azure Pipelines and SonarCloud. Entityframework is used as an ORM. Docker and Kuberenetes are also used.


## Features
- Product catalog page with search option for different products
- User log in process
- Database of products with prices, stocking level, condition, and location information
- Users may add to cart, remove, or purchase products from cart
- Order History page to view order history and review purchased products
- Employees will have the ability to access administrative features to assist customers.
- Employees will have ability to see more detailed information about current stock levels and modify prices based off of demand.
### Stretch Goals
- Ability for users to message store support line
- Sales ads for vechicles based on date-time
- Location-based searching

## Getting Started
To get started witht his program online:
https://vehicles-day.azurewebsites.net

To get started with this program on your local machine:
1: Copy the following: https://github.com/210726-wvu-net-ext/P2-Ashlei-Yuriy-Dylan.git
2: Open a terminal and navigate to the desired location.
3: User ``` git clone url-in-step-1 ```
4: Navigate to "P2-Ashlei-Yuriy-Dylan/client" in your terminal
5: Enter command ``` npm install ``` to install NodeJS dependencies
6. Navigate to "P2-Ashlei-Yuriy-Dylan/API" in your terminal
7: Enter command ``` dotnet restore ``` to install NodeJS dependencies

## Usage
Upon starting the app the user is greeted by the Home page. Here the user has options to see Inventory, vie an insurance option (red umbrella), sign up or log in (under development), or see a pre-approval option (feature to be added in future). 

![Chariots.com Homepage](/Documentation/HomePage.png)

Upon clicking on Invnetory users will be shown a wide selection of vehicles with options to filter those be make and or type of vehicle (ex: Toyota pickup trucks).

![Chariots.com Inventory Page 1/2](/Documentation/Inventory1.png)
![Chariots.com Inventory Page 2/2](/Documentation/Inventory2.png)

![Chariots.com Inventory PFilter Ex](/Documentation/InventoryFilter.png)
## Contributors
- Ashlie Nguyen
- Dylan Restivo
- Yuriy Yarytskyy

## License
This project uses the following license: MIT


## Database Structure
Lucid Chart
https://lucid.app/lucidchart/391bd5c4-8a9f-42d2-b4d0-31d029904859/edit?shared=true&page=0_0#
Imgur
https://i.imgur.com/a/zpY6CHN.png


Useful links:

Sonar Cloud
https://sonarcloud.io/project/configuration?id=210726-wvu-net-ext_P2-Ashlei-Yuriy-Dylan

Azure Boards
https://dev.azure.com/revature-training-uta/Group4-P2-Ashlei-Yuriy-Dylan/_boards/board/t/Group4-P2-Ashlei-Yuriy-Dylan%20Team/Stories

GitHub
https://github.com/210726-wvu-net-ext/P2-Ashlei-Yuriy-Dylan

AzurePipelines
https://dev.azure.com/revature-training-uta/Group4-P2-Ashlei-Yuriy-Dylan/_build
