export type CreatePayableArgsType = {
  value: number;
  emissionDate: Date;
  assignorId: string;
};

export type UpdatePayableArgsType = {
  value?: number;
  emissionDate?: Date;
  assignorId?: string;
};

export type PayableType = {
  id: string;
  value: number;
  emissionDate: Date;
  assignorId: string;
};

export abstract class PayableRepository {
  abstract findAll(page: number, limit: number): Promise<PayableType[]>;

  abstract findOne(id: string): Promise<PayableType>;

  abstract create(
    createPayableArgs: CreatePayableArgsType,
  ): Promise<PayableType>;

  abstract delete(id: string): Promise<PayableType>;

  abstract update(
    id: string,
    updatePayableData: UpdatePayableArgsType,
  ): Promise<PayableType>;
}
