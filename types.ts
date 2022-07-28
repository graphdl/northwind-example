export interface Northwind {
    Category:          Category[];
    Customer:          Customer[];
    Employee:          Employee[];
    EmployeeTerritory: EmployeeTerritory[];
    OrderDetail:       OrderDetail[];
    Product:           Product[];
    Region:            Region[];
    SalesOrder:        SalesOrder[];
    Shipper:           Shipper[];
    Supplier:          Customer[];
    Territory:         Territory[];
}

export interface Category {
    picture:      null;
    entityId:     number;
    description:  string;
    categoryName: string;
}

export interface Customer {
    fax:          null | string;
    city:         string;
    email:        null;
    phone:        string;
    mobile?:      null;
    region:       null | string;
    address:      string;
    country:      Country;
    entityId:     number;
    postalCode:   string;
    companyName:  string;
    contactName:  string;
    contactTitle: string;
    HomePage?:    null;
}

export enum Country {
    Argentina = "Argentina",
    Australia = "Australia",
    Austria = "Austria",
    Belgium = "Belgium",
    Brazil = "Brazil",
    Canada = "Canada",
    Denmark = "Denmark",
    Finland = "Finland",
    France = "France",
    Germany = "Germany",
    Ireland = "Ireland",
    Italy = "Italy",
    Japan = "Japan",
    Mexico = "Mexico",
    Netherlands = "Netherlands",
    Norway = "Norway",
    Poland = "Poland",
    Portugal = "Portugal",
    Singapore = "Singapore",
    Spain = "Spain",
    Sweden = "Sweden",
    Switzerland = "Switzerland",
    Uk = "UK",
    Usa = "USA",
    Venezuela = "Venezuela",
}

export interface Employee {
    city:            string;
    email:           null;
    mgrId:           number | null;
    notes:           null;
    phone:           string;
    photo:           null;
    title:           string;
    mobile:          null;
    region:          null | string;
    address:         string;
    country:         Country;
    entityId:        number;
    hireDate:        Date;
    lastname:        string;
    birthDate:       Date;
    extension:       null;
    firstname:       string;
    photoPath:       null;
    postalCode:      string;
    titleOfCourtesy: string;
}

export interface EmployeeTerritory {
    entityId:      number;
    employeeId:    number;
    territoryCode: string;
}

export interface OrderDetail {
    orderId:   number;
    discount:  number;
    entityId:  number;
    quantity:  number;
    productId: number;
    unitPrice: number;
}

export interface Product {
    entityId:        number;
    unitPrice:       number;
    categoryId:      number;
    supplierId:      number;
    productName:     string;
    discontinued:    string;
    reorderLevel:    null;
    unitsInStock:    null;
    unitsOnOrder:    null;
    quantityPerUnit: null;
}

export interface Region {
    entityId:          number;
    regiondescription: string;
}

export interface SalesOrder {
    freight:        number;
    entityId:       number;
    shipCity:       string;
    shipName:       string;
    orderDate:      Date;
    shipperId:      number;
    customerId:     number;
    employeeId:     number;
    shipRegion:     null | string;
    shipAddress:    string;
    shipCountry:    Country;
    shippedDate:    Date | null;
    requiredDate:   Date;
    shipPostalCode: string;
}

export interface Shipper {
    phone:       string;
    entityId:    number;
    companyName: string;
}

export interface Territory {
    entityId:             number;
    regionId:             number;
    territoryCode:        string;
    territorydescription: string;
}
