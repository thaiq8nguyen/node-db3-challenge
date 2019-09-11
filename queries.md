# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
*SELECT ProductName, CategoryName FROM [Products] INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID*

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
*SELECT OrderID, ShipperName FROM [Orders] JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID WHERE OrderDate < "1997-01-09"*

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
*SELECT ProductName, Quantity FROM [Orders] join OrderDetails on Orders.OrderID = OrderDetails.OrderID join Products On OrderDetails.ProductID = Products.ProductID where Orders.OrderID = 10251*

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
*SELECT C.CustomerName, E.LastName As "Employee's Last Name" FROM [Orders] As O Join Customers As C On O.CustomerID = C.CustomerID Join Employees As E On O.EmployeeID = E.EmployeeID*

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
*SELECT CategoryName, Count(CategoryName) As Count FROM [Categories] As C Join Products As P On C.CategoryID = P.CategoryID Group By CategoryName*
### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
*SELECT O.OrderID, Count(Od.ProductID) as ItemCount FROM [Orders] As O Join OrderDetails As Od ON O.OrderID = Od.OrderID Group BY O.OrderID*
