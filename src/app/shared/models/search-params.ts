import { GenericField } from './generic-field';

export interface SearchParams {
    page?: number;
    query?: string;
    field1?: GenericField;
    field2?: GenericField;
}
