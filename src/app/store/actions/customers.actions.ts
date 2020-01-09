import { Action } from "@ngrx/store";

export const LOAD_CUSTOMERS = '[Customers] Load customers';

export class LoadCustomers implements Action {
    readonly type = LOAD_CUSTOMERS;
}

export type CustomersActions = LoadCustomers;