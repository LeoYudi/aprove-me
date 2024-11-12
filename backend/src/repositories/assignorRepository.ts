export type CreateAssignorArgsType = {
  document: string;
  email: string;
  phone: string;
  name: string;
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

  abstract create({
    document,
    email,
    phone,
    name,
  }: CreateAssignorArgsType): Promise<AssignorType>;

  abstract delete(id: string): Promise<AssignorType>;
}
