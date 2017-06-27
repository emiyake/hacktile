/* tslint:disable */
//  This file was automatically generated and should not be edited.

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


export type CategoriesListQueryVariables = {
  specialtyId: number | null,
};

export type CategoriesListQuery = {
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
    } > | null,
  } | null,
};
/* tslint:enable */
