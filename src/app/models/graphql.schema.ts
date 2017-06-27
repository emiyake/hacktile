/* tslint:disable */
//  This file was automatically generated and should not be edited.

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
