export type CreateAssignorArgsType = {
  document: string;
  email: string;
  phone: string;
  name: string;
};

export type CreateAssignorType = {
  id: string;
  document: string;
  email: string;
  phone: string;
  name: string;
};

export abstract class AssignorRepository {
  abstract create({
    document,
    email,
    phone,
    name,
  }: CreateAssignorArgsType): Promise<CreateAssignorType>;
}
