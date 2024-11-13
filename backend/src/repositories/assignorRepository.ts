export type CreateAssignorArgsType = {
  document: string;
  email: string;
  phone: string;
  name: string;
};

export type UpdateAssignorArgsType = {
  document?: string;
  email?: string;
  phone?: string;
  name?: string;
};

export type AssignorType = {
  id: string;
  document: string;
  email: string;
  phone: string;
  name: string;
};

export abstract class AssignorRepository {
  abstract findOne(id: string): Promise<AssignorType>;

  abstract create(
    createAssignorArgs: CreateAssignorArgsType,
  ): Promise<AssignorType>;

  abstract delete(id: string): Promise<AssignorType>;

  abstract update(
    id: string,
    updateAssignorData: UpdateAssignorArgsType,
  ): Promise<AssignorType>;
}
