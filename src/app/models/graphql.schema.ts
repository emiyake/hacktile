/* tslint:disable */
//  This file was automatically generated and should not be edited.

// Order status
export type OrderStatusType =
  "REGISTERED" | // Order Registered
  "CONFIRMED" | // Order Confirmed, on its way
  "DELIVERED" | // Order Delivered
  "CANCELED"; // Order Canceled


export type OrdersOrderingInputObjectType = {
  sort: OrdersOrderByFieldEnum | null,
  direction: OrdersOrderByDirectionEnum | null,
};

// List of available ordering fields.
export type OrdersOrderByFieldEnum =
  "id" | // Order id
  "code" | // Order code
  "trackingId" | // Order tracking Id
  "issueDate" | // Order issue date
  "deliveryDate"; // Order delivery date


// List of available ordering directions.
export type OrdersOrderByDirectionEnum =
  "ASC" | // Ascendent direction
  "DESC"; // Descendant direction


export type ProductsOrderingInputObjectType = {
  sort: ProductsOrderByFieldEnum | null,
  direction: ProductsOrderByDirectionEnum | null,
};

// List of available ordering fields.
export type ProductsOrderByFieldEnum =
  "id" | // Product id
  "name" | // Product name
  "code" | // Product code
  "company" | // Product company
  "activePrinciple" | // Product activePrinciple
  "description" | // Product description
  "featured" | // Product featured
  "visible"; // Product visible


// List of available ordering directions.
export type ProductsOrderByDirectionEnum =
  "ASC" | // Ascendent direction
  "DESC"; // Descendant direction


export type SpecialtiesOrderingInputObjectType = {
  sort: SpecialtiesOrderByFieldEnum | null,
  direction: SpecialtiesOrderByDirectionEnum | null,
};

// List of available ordering fields.
export type SpecialtiesOrderByFieldEnum =
  "id" | // Specialty id
  "name" | // Specialty name
  "color"; // Specialty color


// List of available ordering directions.
export type SpecialtiesOrderByDirectionEnum =
  "ASC" | // Ascendent direction
  "DESC"; // Descendant direction


export type AddressListQuery = {
  Addresses:  {
    // Array of elements
    nodes:  Array< {
      // Address id
      id: string,
      // Address zip
      zip: string | null,
      // Address street
      street: string | null,
      // Address number
      number: string | null,
      // Address additional details
      additionalDetails: string | null,
      // Address neighborhood
      neighborhood: string | null,
      // Address city
      city: string | null,
      // Address state
      state: string | null,
      // Address mobile phone number
      mobilePhoneNumber: string | null,
      // Address phone number
      phoneNumber: string | null,
    } > | null,
  } | null,
};

export type CategoryListQueryVariables = {
  specialtyId: number | null,
};

export type CategoryListQuery = {
  Specialty:  {
    // Specialty categories
    categories:  Array< {
      // Category id
      id: string,
      // Category name
      name: string,
    } > | null,
  } | null,
};

export type DoctorDetailQueryVariables = {
  id: number | null,
};

export type DoctorDetailQuery = {
  Doctor:  {
    // Doctor name
    name: string | null,
    // Doctor email
    email: string | null,
    // Doctor birthdate
    birthdate: string | null,
    // Doctor CRM
    crm:  {
      // CRM number
      number: string,
      // CRM state
      state: string,
    } | null,
    // Doctor Identification
    identification:  {
      // Identification type
      type: string,
      // Identification number
      number: string,
    } | null,
    // Doctor Specialty
    specialty:  {
      // Specialty id
      id: string,
      // Specialty name
      name: string | null,
    } | null,
  } | null,
};

export type OrderDetailQueryVariables = {
  id: number | null,
};

export type OrderDetailQuery = {
  Order:  {
    // Order id
    id: string,
    // Order code
    code: string | null,
    // Order tracking Id
    trackingId: string | null,
    // Order status
    status: OrderStatusType | null,
    // Order Links
    products:  Array< {
      // Order Product quantity
      quantity: number,
      // Order link
      productPresentation:  {
        // Product presentation description
        description: string,
      },
    } > | null,
    // Order delivery address
    deliveryAddress:  {
      // Address zip
      zip: string | null,
      // Address street
      street: string | null,
      // Address number
      number: string | null,
      // Address additional details
      additionalDetails: string | null,
      // Address neighborhood
      neighborhood: string | null,
      // Address city
      city: string | null,
      // Address state
      state: string | null,
      // Address mobile phone number
      mobilePhoneNumber: string | null,
      // Address phone number
      phoneNumber: string | null,
    } | null,
    // Order issue date
    issueDate: string | null,
    // Order delivery date
    deliveryDate: string | null,
  } | null,
};

export type OrderListQueryVariables = {
  limit: number | null,
  offset: number | null,
  orderBy: Array< OrdersOrderingInputObjectType | null > | null,
};

export type OrderListQuery = {
  Orders:  {
    // Array of elements
    nodes:  Array< {
      // Order id
      id: string,
      // Order code
      code: string | null,
      // Order status
      status: OrderStatusType | null,
      // Order issue date
      issueDate: string | null,
      // Order delivery date
      deliveryDate: string | null,
    } > | null,
    // Page information
    pageInfo:  {
      hasNextPage: boolean,
    } | null,
  } | null,
};

export type ProductDetailQueryVariables = {
  id: number | null,
};

export type ProductDetailQuery = {
  Product:  {
    // Product id
    id: string,
    // Product name
    name: string | null,
    // Product code
    code: string | null,
    // Product company
    company: string | null,
    // Product activePrinciple
    activePrinciple: string | null,
    // Product description
    description: string | null,
    // Product Links
    links:  Array< {
      // Product Link link
      link: string,
      // Product Link sequence
      sequence: number,
    } > | null,
  } | null,
};

export type ProductListQueryVariables = {
  limit: number | null,
  offset: number | null,
  orderBy: Array< ProductsOrderingInputObjectType | null > | null,
};

export type ProductListQuery = {
  Products:  {
    // Array of elements
    nodes:  Array< {
      // Product name
      name: string | null,
      // Product id
      id: string,
      // Product company
      company: string | null,
    } > | null,
    // Page information
    pageInfo:  {
      hasNextPage: boolean,
    } | null,
  } | null,
};

export type SpecialtyListQueryVariables = {
  limit: number | null,
  offset: number | null,
  orderBy: Array< SpecialtiesOrderingInputObjectType | null > | null,
};

export type SpecialtyListQuery = {
  Specialties:  {
    // Array of elements
    nodes:  Array< {
      // Specialty name
      name: string | null,
      // Specialty id
      id: string,
    } > | null,
  } | null,
};

export type SubCategoryListQueryVariables = {
  parentCategoryId: number | null,
};

export type SubCategoryListQuery = {
  Category:  {
    // Children categories
    children:  Array< {
      // Subcategory name
      name: string,
      // Subcategory id
      id: string,
    } > | null,
  } | null,
};
/* tslint:enable */
