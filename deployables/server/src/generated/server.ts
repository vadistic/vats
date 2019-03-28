export type Maybe<T> = T | null;


export interface ApplicationWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface TaskWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  owners_every?: Maybe<UserWhereInput>;
  
  owners_some?: Maybe<UserWhereInput>;
  
  owners_none?: Maybe<UserWhereInput>;
  
  candidate?: Maybe<CandidateWhereInput>;
  
  title?: Maybe<string>;
  
  title_not?: Maybe<string>;
  
  title_in?: Maybe<string[]>;
  
  title_not_in?: Maybe<string[]>;
  
  title_lt?: Maybe<string>;
  
  title_lte?: Maybe<string>;
  
  title_gt?: Maybe<string>;
  
  title_gte?: Maybe<string>;
  
  title_contains?: Maybe<string>;
  
  title_not_contains?: Maybe<string>;
  
  title_starts_with?: Maybe<string>;
  
  title_not_starts_with?: Maybe<string>;
  
  title_ends_with?: Maybe<string>;
  
  title_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
  
  dueAt_not?: Maybe<DateTime>;
  
  dueAt_in?: Maybe<DateTime[]>;
  
  dueAt_not_in?: Maybe<DateTime[]>;
  
  dueAt_lt?: Maybe<DateTime>;
  
  dueAt_lte?: Maybe<DateTime>;
  
  dueAt_gt?: Maybe<DateTime>;
  
  dueAt_gte?: Maybe<DateTime>;
  
  AND?: Maybe<TaskWhereInput[]>;
  
  OR?: Maybe<TaskWhereInput[]>;
  
  NOT?: Maybe<TaskWhereInput[]>;
}

export interface UserWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  tasks_every?: Maybe<TaskWhereInput>;
  
  tasks_some?: Maybe<TaskWhereInput>;
  
  tasks_none?: Maybe<TaskWhereInput>;
  
  firstName?: Maybe<string>;
  
  firstName_not?: Maybe<string>;
  
  firstName_in?: Maybe<string[]>;
  
  firstName_not_in?: Maybe<string[]>;
  
  firstName_lt?: Maybe<string>;
  
  firstName_lte?: Maybe<string>;
  
  firstName_gt?: Maybe<string>;
  
  firstName_gte?: Maybe<string>;
  
  firstName_contains?: Maybe<string>;
  
  firstName_not_contains?: Maybe<string>;
  
  firstName_starts_with?: Maybe<string>;
  
  firstName_not_starts_with?: Maybe<string>;
  
  firstName_ends_with?: Maybe<string>;
  
  firstName_not_ends_with?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  lastName_not?: Maybe<string>;
  
  lastName_in?: Maybe<string[]>;
  
  lastName_not_in?: Maybe<string[]>;
  
  lastName_lt?: Maybe<string>;
  
  lastName_lte?: Maybe<string>;
  
  lastName_gt?: Maybe<string>;
  
  lastName_gte?: Maybe<string>;
  
  lastName_contains?: Maybe<string>;
  
  lastName_not_contains?: Maybe<string>;
  
  lastName_starts_with?: Maybe<string>;
  
  lastName_not_starts_with?: Maybe<string>;
  
  lastName_ends_with?: Maybe<string>;
  
  lastName_not_ends_with?: Maybe<string>;
  
  email?: Maybe<string>;
  
  email_not?: Maybe<string>;
  
  email_in?: Maybe<string[]>;
  
  email_not_in?: Maybe<string[]>;
  
  email_lt?: Maybe<string>;
  
  email_lte?: Maybe<string>;
  
  email_gt?: Maybe<string>;
  
  email_gte?: Maybe<string>;
  
  email_contains?: Maybe<string>;
  
  email_not_contains?: Maybe<string>;
  
  email_starts_with?: Maybe<string>;
  
  email_not_starts_with?: Maybe<string>;
  
  email_ends_with?: Maybe<string>;
  
  email_not_ends_with?: Maybe<string>;
  
  username?: Maybe<string>;
  
  username_not?: Maybe<string>;
  
  username_in?: Maybe<string[]>;
  
  username_not_in?: Maybe<string[]>;
  
  username_lt?: Maybe<string>;
  
  username_lte?: Maybe<string>;
  
  username_gt?: Maybe<string>;
  
  username_gte?: Maybe<string>;
  
  username_contains?: Maybe<string>;
  
  username_not_contains?: Maybe<string>;
  
  username_starts_with?: Maybe<string>;
  
  username_not_starts_with?: Maybe<string>;
  
  username_ends_with?: Maybe<string>;
  
  username_not_ends_with?: Maybe<string>;
  
  lastLogin?: Maybe<DateTime>;
  
  lastLogin_not?: Maybe<DateTime>;
  
  lastLogin_in?: Maybe<DateTime[]>;
  
  lastLogin_not_in?: Maybe<DateTime[]>;
  
  lastLogin_lt?: Maybe<DateTime>;
  
  lastLogin_lte?: Maybe<DateTime>;
  
  lastLogin_gt?: Maybe<DateTime>;
  
  lastLogin_gte?: Maybe<DateTime>;
  
  deletedAt?: Maybe<DateTime>;
  
  deletedAt_not?: Maybe<DateTime>;
  
  deletedAt_in?: Maybe<DateTime[]>;
  
  deletedAt_not_in?: Maybe<DateTime[]>;
  
  deletedAt_lt?: Maybe<DateTime>;
  
  deletedAt_lte?: Maybe<DateTime>;
  
  deletedAt_gt?: Maybe<DateTime>;
  
  deletedAt_gte?: Maybe<DateTime>;
  
  position?: Maybe<string>;
  
  position_not?: Maybe<string>;
  
  position_in?: Maybe<string[]>;
  
  position_not_in?: Maybe<string[]>;
  
  position_lt?: Maybe<string>;
  
  position_lte?: Maybe<string>;
  
  position_gt?: Maybe<string>;
  
  position_gte?: Maybe<string>;
  
  position_contains?: Maybe<string>;
  
  position_not_contains?: Maybe<string>;
  
  position_starts_with?: Maybe<string>;
  
  position_not_starts_with?: Maybe<string>;
  
  position_ends_with?: Maybe<string>;
  
  position_not_ends_with?: Maybe<string>;
  
  avatar?: Maybe<FileWhereInput>;
  
  AND?: Maybe<UserWhereInput[]>;
  
  OR?: Maybe<UserWhereInput[]>;
  
  NOT?: Maybe<UserWhereInput[]>;
}

export interface FileWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  size?: Maybe<number>;
  
  size_not?: Maybe<number>;
  
  size_in?: Maybe<number[]>;
  
  size_not_in?: Maybe<number[]>;
  
  size_lt?: Maybe<number>;
  
  size_lte?: Maybe<number>;
  
  size_gt?: Maybe<number>;
  
  size_gte?: Maybe<number>;
  
  type?: Maybe<string>;
  
  type_not?: Maybe<string>;
  
  type_in?: Maybe<string[]>;
  
  type_not_in?: Maybe<string[]>;
  
  type_lt?: Maybe<string>;
  
  type_lte?: Maybe<string>;
  
  type_gt?: Maybe<string>;
  
  type_gte?: Maybe<string>;
  
  type_contains?: Maybe<string>;
  
  type_not_contains?: Maybe<string>;
  
  type_starts_with?: Maybe<string>;
  
  type_not_starts_with?: Maybe<string>;
  
  type_ends_with?: Maybe<string>;
  
  type_not_ends_with?: Maybe<string>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  url?: Maybe<string>;
  
  url_not?: Maybe<string>;
  
  url_in?: Maybe<string[]>;
  
  url_not_in?: Maybe<string[]>;
  
  url_lt?: Maybe<string>;
  
  url_lte?: Maybe<string>;
  
  url_gt?: Maybe<string>;
  
  url_gte?: Maybe<string>;
  
  url_contains?: Maybe<string>;
  
  url_not_contains?: Maybe<string>;
  
  url_starts_with?: Maybe<string>;
  
  url_not_starts_with?: Maybe<string>;
  
  url_ends_with?: Maybe<string>;
  
  url_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<FileWhereInput[]>;
  
  OR?: Maybe<FileWhereInput[]>;
  
  NOT?: Maybe<FileWhereInput[]>;
}

export interface CandidateWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  firstName?: Maybe<string>;
  
  firstName_not?: Maybe<string>;
  
  firstName_in?: Maybe<string[]>;
  
  firstName_not_in?: Maybe<string[]>;
  
  firstName_lt?: Maybe<string>;
  
  firstName_lte?: Maybe<string>;
  
  firstName_gt?: Maybe<string>;
  
  firstName_gte?: Maybe<string>;
  
  firstName_contains?: Maybe<string>;
  
  firstName_not_contains?: Maybe<string>;
  
  firstName_starts_with?: Maybe<string>;
  
  firstName_not_starts_with?: Maybe<string>;
  
  firstName_ends_with?: Maybe<string>;
  
  firstName_not_ends_with?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  lastName_not?: Maybe<string>;
  
  lastName_in?: Maybe<string[]>;
  
  lastName_not_in?: Maybe<string[]>;
  
  lastName_lt?: Maybe<string>;
  
  lastName_lte?: Maybe<string>;
  
  lastName_gt?: Maybe<string>;
  
  lastName_gte?: Maybe<string>;
  
  lastName_contains?: Maybe<string>;
  
  lastName_not_contains?: Maybe<string>;
  
  lastName_starts_with?: Maybe<string>;
  
  lastName_not_starts_with?: Maybe<string>;
  
  lastName_ends_with?: Maybe<string>;
  
  lastName_not_ends_with?: Maybe<string>;
  
  avatar?: Maybe<FileWhereInput>;
  
  company?: Maybe<string>;
  
  company_not?: Maybe<string>;
  
  company_in?: Maybe<string[]>;
  
  company_not_in?: Maybe<string[]>;
  
  company_lt?: Maybe<string>;
  
  company_lte?: Maybe<string>;
  
  company_gt?: Maybe<string>;
  
  company_gte?: Maybe<string>;
  
  company_contains?: Maybe<string>;
  
  company_not_contains?: Maybe<string>;
  
  company_starts_with?: Maybe<string>;
  
  company_not_starts_with?: Maybe<string>;
  
  company_ends_with?: Maybe<string>;
  
  company_not_ends_with?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  headline_not?: Maybe<string>;
  
  headline_in?: Maybe<string[]>;
  
  headline_not_in?: Maybe<string[]>;
  
  headline_lt?: Maybe<string>;
  
  headline_lte?: Maybe<string>;
  
  headline_gt?: Maybe<string>;
  
  headline_gte?: Maybe<string>;
  
  headline_contains?: Maybe<string>;
  
  headline_not_contains?: Maybe<string>;
  
  headline_starts_with?: Maybe<string>;
  
  headline_not_starts_with?: Maybe<string>;
  
  headline_ends_with?: Maybe<string>;
  
  headline_not_ends_with?: Maybe<string>;
  
  position?: Maybe<string>;
  
  position_not?: Maybe<string>;
  
  position_in?: Maybe<string[]>;
  
  position_not_in?: Maybe<string[]>;
  
  position_lt?: Maybe<string>;
  
  position_lte?: Maybe<string>;
  
  position_gt?: Maybe<string>;
  
  position_gte?: Maybe<string>;
  
  position_contains?: Maybe<string>;
  
  position_not_contains?: Maybe<string>;
  
  position_starts_with?: Maybe<string>;
  
  position_not_starts_with?: Maybe<string>;
  
  position_ends_with?: Maybe<string>;
  
  position_not_ends_with?: Maybe<string>;
  
  resumesFile_every?: Maybe<FileWhereInput>;
  
  resumesFile_some?: Maybe<FileWhereInput>;
  
  resumesFile_none?: Maybe<FileWhereInput>;
  
  coverLettersFile_every?: Maybe<FileWhereInput>;
  
  coverLettersFile_some?: Maybe<FileWhereInput>;
  
  coverLettersFile_none?: Maybe<FileWhereInput>;
  
  tags_every?: Maybe<TagWhereInput>;
  
  tags_some?: Maybe<TagWhereInput>;
  
  tags_none?: Maybe<TagWhereInput>;
  
  sources_every?: Maybe<SourceWhereInput>;
  
  sources_some?: Maybe<SourceWhereInput>;
  
  sources_none?: Maybe<SourceWhereInput>;
  
  fields_every?: Maybe<FieldInstanceWhereInput>;
  
  fields_some?: Maybe<FieldInstanceWhereInput>;
  
  fields_none?: Maybe<FieldInstanceWhereInput>;
  
  tasks_every?: Maybe<TaskWhereInput>;
  
  tasks_some?: Maybe<TaskWhereInput>;
  
  tasks_none?: Maybe<TaskWhereInput>;
  
  applications_every?: Maybe<ApplicationWhereInput>;
  
  applications_some?: Maybe<ApplicationWhereInput>;
  
  applications_none?: Maybe<ApplicationWhereInput>;
  
  comments_every?: Maybe<CommentWhereInput>;
  
  comments_some?: Maybe<CommentWhereInput>;
  
  comments_none?: Maybe<CommentWhereInput>;
  
  AND?: Maybe<CandidateWhereInput[]>;
  
  OR?: Maybe<CandidateWhereInput[]>;
  
  NOT?: Maybe<CandidateWhereInput[]>;
}

export interface TagWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  label?: Maybe<string>;
  
  label_not?: Maybe<string>;
  
  label_in?: Maybe<string[]>;
  
  label_not_in?: Maybe<string[]>;
  
  label_lt?: Maybe<string>;
  
  label_lte?: Maybe<string>;
  
  label_gt?: Maybe<string>;
  
  label_gte?: Maybe<string>;
  
  label_contains?: Maybe<string>;
  
  label_not_contains?: Maybe<string>;
  
  label_starts_with?: Maybe<string>;
  
  label_not_starts_with?: Maybe<string>;
  
  label_ends_with?: Maybe<string>;
  
  label_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<TagWhereInput[]>;
  
  OR?: Maybe<TagWhereInput[]>;
  
  NOT?: Maybe<TagWhereInput[]>;
}

export interface SourceWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  label?: Maybe<string>;
  
  label_not?: Maybe<string>;
  
  label_in?: Maybe<string[]>;
  
  label_not_in?: Maybe<string[]>;
  
  label_lt?: Maybe<string>;
  
  label_lte?: Maybe<string>;
  
  label_gt?: Maybe<string>;
  
  label_gte?: Maybe<string>;
  
  label_contains?: Maybe<string>;
  
  label_not_contains?: Maybe<string>;
  
  label_starts_with?: Maybe<string>;
  
  label_not_starts_with?: Maybe<string>;
  
  label_ends_with?: Maybe<string>;
  
  label_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<SourceWhereInput[]>;
  
  OR?: Maybe<SourceWhereInput[]>;
  
  NOT?: Maybe<SourceWhereInput[]>;
}

export interface FieldInstanceWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  prototype?: Maybe<FieldWhereInput>;
  
  value?: Maybe<string>;
  
  value_not?: Maybe<string>;
  
  value_in?: Maybe<string[]>;
  
  value_not_in?: Maybe<string[]>;
  
  value_lt?: Maybe<string>;
  
  value_lte?: Maybe<string>;
  
  value_gt?: Maybe<string>;
  
  value_gte?: Maybe<string>;
  
  value_contains?: Maybe<string>;
  
  value_not_contains?: Maybe<string>;
  
  value_starts_with?: Maybe<string>;
  
  value_not_starts_with?: Maybe<string>;
  
  value_ends_with?: Maybe<string>;
  
  value_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<FieldInstanceWhereInput[]>;
  
  OR?: Maybe<FieldInstanceWhereInput[]>;
  
  NOT?: Maybe<FieldInstanceWhereInput[]>;
}

export interface FieldWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  type?: Maybe<FieldType>;
  
  type_not?: Maybe<FieldType>;
  
  type_in?: Maybe<FieldType[]>;
  
  type_not_in?: Maybe<FieldType[]>;
  
  label?: Maybe<string>;
  
  label_not?: Maybe<string>;
  
  label_in?: Maybe<string[]>;
  
  label_not_in?: Maybe<string[]>;
  
  label_lt?: Maybe<string>;
  
  label_lte?: Maybe<string>;
  
  label_gt?: Maybe<string>;
  
  label_gte?: Maybe<string>;
  
  label_contains?: Maybe<string>;
  
  label_not_contains?: Maybe<string>;
  
  label_starts_with?: Maybe<string>;
  
  label_not_starts_with?: Maybe<string>;
  
  label_ends_with?: Maybe<string>;
  
  label_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<FieldWhereInput[]>;
  
  OR?: Maybe<FieldWhereInput[]>;
  
  NOT?: Maybe<FieldWhereInput[]>;
}

export interface ApplicationWhereInput {
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  type?: Maybe<ApplicationType>;
  
  type_not?: Maybe<ApplicationType>;
  
  type_in?: Maybe<ApplicationType[]>;
  
  type_not_in?: Maybe<ApplicationType[]>;
  
  disqualification?: Maybe<DisqualificationInstanceWhereInput>;
  
  stage?: Maybe<StageWhereInput>;
  
  reviews_every?: Maybe<ReviewInstanceWhereInput>;
  
  reviews_some?: Maybe<ReviewInstanceWhereInput>;
  
  reviews_none?: Maybe<ReviewInstanceWhereInput>;
  
  job?: Maybe<JobWhereInput>;
  
  candidate?: Maybe<CandidateWhereInput>;
  
  AND?: Maybe<ApplicationWhereInput[]>;
  
  OR?: Maybe<ApplicationWhereInput[]>;
  
  NOT?: Maybe<ApplicationWhereInput[]>;
}

export interface DisqualificationInstanceWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  prototype?: Maybe<DisqualificationWhereInput>;
  
  createdBy?: Maybe<UserWhereInput>;
  
  content?: Maybe<string>;
  
  content_not?: Maybe<string>;
  
  content_in?: Maybe<string[]>;
  
  content_not_in?: Maybe<string[]>;
  
  content_lt?: Maybe<string>;
  
  content_lte?: Maybe<string>;
  
  content_gt?: Maybe<string>;
  
  content_gte?: Maybe<string>;
  
  content_contains?: Maybe<string>;
  
  content_not_contains?: Maybe<string>;
  
  content_starts_with?: Maybe<string>;
  
  content_not_starts_with?: Maybe<string>;
  
  content_ends_with?: Maybe<string>;
  
  content_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<DisqualificationInstanceWhereInput[]>;
  
  OR?: Maybe<DisqualificationInstanceWhereInput[]>;
  
  NOT?: Maybe<DisqualificationInstanceWhereInput[]>;
}

export interface DisqualificationWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<DisqualificationWhereInput[]>;
  
  OR?: Maybe<DisqualificationWhereInput[]>;
  
  NOT?: Maybe<DisqualificationWhereInput[]>;
}

export interface StageWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  type?: Maybe<StageType>;
  
  type_not?: Maybe<StageType>;
  
  type_in?: Maybe<StageType[]>;
  
  type_not_in?: Maybe<StageType[]>;
  
  AND?: Maybe<StageWhereInput[]>;
  
  OR?: Maybe<StageWhereInput[]>;
  
  NOT?: Maybe<StageWhereInput[]>;
}

export interface ReviewInstanceWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  prototype?: Maybe<ReviewWhereInput>;
  
  fields_every?: Maybe<FieldInstanceWhereInput>;
  
  fields_some?: Maybe<FieldInstanceWhereInput>;
  
  fields_none?: Maybe<FieldInstanceWhereInput>;
  
  createdBy?: Maybe<UserWhereInput>;
  
  rating?: Maybe<number>;
  
  rating_not?: Maybe<number>;
  
  rating_in?: Maybe<number[]>;
  
  rating_not_in?: Maybe<number[]>;
  
  rating_lt?: Maybe<number>;
  
  rating_lte?: Maybe<number>;
  
  rating_gt?: Maybe<number>;
  
  rating_gte?: Maybe<number>;
  
  content?: Maybe<string>;
  
  content_not?: Maybe<string>;
  
  content_in?: Maybe<string[]>;
  
  content_not_in?: Maybe<string[]>;
  
  content_lt?: Maybe<string>;
  
  content_lte?: Maybe<string>;
  
  content_gt?: Maybe<string>;
  
  content_gte?: Maybe<string>;
  
  content_contains?: Maybe<string>;
  
  content_not_contains?: Maybe<string>;
  
  content_starts_with?: Maybe<string>;
  
  content_not_starts_with?: Maybe<string>;
  
  content_ends_with?: Maybe<string>;
  
  content_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<ReviewInstanceWhereInput[]>;
  
  OR?: Maybe<ReviewInstanceWhereInput[]>;
  
  NOT?: Maybe<ReviewInstanceWhereInput[]>;
}

export interface ReviewWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  fields_every?: Maybe<FieldWhereInput>;
  
  fields_some?: Maybe<FieldWhereInput>;
  
  fields_none?: Maybe<FieldWhereInput>;
  
  AND?: Maybe<ReviewWhereInput[]>;
  
  OR?: Maybe<ReviewWhereInput[]>;
  
  NOT?: Maybe<ReviewWhereInput[]>;
}

export interface JobWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  workspace?: Maybe<WorkspaceWhereInput>;
  
  applications_every?: Maybe<ApplicationWhereInput>;
  
  applications_some?: Maybe<ApplicationWhereInput>;
  
  applications_none?: Maybe<ApplicationWhereInput>;
  
  workflow?: Maybe<WorkflowWhereInput>;
  
  comments_every?: Maybe<CommentWhereInput>;
  
  comments_some?: Maybe<CommentWhereInput>;
  
  comments_none?: Maybe<CommentWhereInput>;
  
  type?: Maybe<JobType>;
  
  type_not?: Maybe<JobType>;
  
  type_in?: Maybe<JobType[]>;
  
  type_not_in?: Maybe<JobType[]>;
  
  department?: Maybe<string>;
  
  department_not?: Maybe<string>;
  
  department_in?: Maybe<string[]>;
  
  department_not_in?: Maybe<string[]>;
  
  department_lt?: Maybe<string>;
  
  department_lte?: Maybe<string>;
  
  department_gt?: Maybe<string>;
  
  department_gte?: Maybe<string>;
  
  department_contains?: Maybe<string>;
  
  department_not_contains?: Maybe<string>;
  
  department_starts_with?: Maybe<string>;
  
  department_not_starts_with?: Maybe<string>;
  
  department_ends_with?: Maybe<string>;
  
  department_not_ends_with?: Maybe<string>;
  
  locations_every?: Maybe<LocationWhereInput>;
  
  locations_some?: Maybe<LocationWhereInput>;
  
  locations_none?: Maybe<LocationWhereInput>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  excerpt?: Maybe<string>;
  
  excerpt_not?: Maybe<string>;
  
  excerpt_in?: Maybe<string[]>;
  
  excerpt_not_in?: Maybe<string[]>;
  
  excerpt_lt?: Maybe<string>;
  
  excerpt_lte?: Maybe<string>;
  
  excerpt_gt?: Maybe<string>;
  
  excerpt_gte?: Maybe<string>;
  
  excerpt_contains?: Maybe<string>;
  
  excerpt_not_contains?: Maybe<string>;
  
  excerpt_starts_with?: Maybe<string>;
  
  excerpt_not_starts_with?: Maybe<string>;
  
  excerpt_ends_with?: Maybe<string>;
  
  excerpt_not_ends_with?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  companyDescription_not?: Maybe<string>;
  
  companyDescription_in?: Maybe<string[]>;
  
  companyDescription_not_in?: Maybe<string[]>;
  
  companyDescription_lt?: Maybe<string>;
  
  companyDescription_lte?: Maybe<string>;
  
  companyDescription_gt?: Maybe<string>;
  
  companyDescription_gte?: Maybe<string>;
  
  companyDescription_contains?: Maybe<string>;
  
  companyDescription_not_contains?: Maybe<string>;
  
  companyDescription_starts_with?: Maybe<string>;
  
  companyDescription_not_starts_with?: Maybe<string>;
  
  companyDescription_ends_with?: Maybe<string>;
  
  companyDescription_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  requirements?: Maybe<string>;
  
  requirements_not?: Maybe<string>;
  
  requirements_in?: Maybe<string[]>;
  
  requirements_not_in?: Maybe<string[]>;
  
  requirements_lt?: Maybe<string>;
  
  requirements_lte?: Maybe<string>;
  
  requirements_gt?: Maybe<string>;
  
  requirements_gte?: Maybe<string>;
  
  requirements_contains?: Maybe<string>;
  
  requirements_not_contains?: Maybe<string>;
  
  requirements_starts_with?: Maybe<string>;
  
  requirements_not_starts_with?: Maybe<string>;
  
  requirements_ends_with?: Maybe<string>;
  
  requirements_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<JobWhereInput[]>;
  
  OR?: Maybe<JobWhereInput[]>;
  
  NOT?: Maybe<JobWhereInput[]>;
}

export interface WorkspaceWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  users_every?: Maybe<UserWhereInput>;
  
  users_some?: Maybe<UserWhereInput>;
  
  users_none?: Maybe<UserWhereInput>;
  
  jobs_every?: Maybe<JobWhereInput>;
  
  jobs_some?: Maybe<JobWhereInput>;
  
  jobs_none?: Maybe<JobWhereInput>;
  
  candidates_every?: Maybe<CandidateWhereInput>;
  
  candidates_some?: Maybe<CandidateWhereInput>;
  
  candidates_none?: Maybe<CandidateWhereInput>;
  
  workflows_every?: Maybe<WorkflowWhereInput>;
  
  workflows_some?: Maybe<WorkflowWhereInput>;
  
  workflows_none?: Maybe<WorkflowWhereInput>;
  
  invites_every?: Maybe<InviteWhereInput>;
  
  invites_some?: Maybe<InviteWhereInput>;
  
  invites_none?: Maybe<InviteWhereInput>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<WorkspaceWhereInput[]>;
  
  OR?: Maybe<WorkspaceWhereInput[]>;
  
  NOT?: Maybe<WorkspaceWhereInput[]>;
}

export interface WorkflowWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  jobs_every?: Maybe<JobWhereInput>;
  
  jobs_some?: Maybe<JobWhereInput>;
  
  jobs_none?: Maybe<JobWhereInput>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  stages_every?: Maybe<StageWhereInput>;
  
  stages_some?: Maybe<StageWhereInput>;
  
  stages_none?: Maybe<StageWhereInput>;
  
  disqualifications_every?: Maybe<DisqualificationWhereInput>;
  
  disqualifications_some?: Maybe<DisqualificationWhereInput>;
  
  disqualifications_none?: Maybe<DisqualificationWhereInput>;
  
  fields_every?: Maybe<FieldWhereInput>;
  
  fields_some?: Maybe<FieldWhereInput>;
  
  fields_none?: Maybe<FieldWhereInput>;
  
  reviews_every?: Maybe<ReviewWhereInput>;
  
  reviews_some?: Maybe<ReviewWhereInput>;
  
  reviews_none?: Maybe<ReviewWhereInput>;
  
  AND?: Maybe<WorkflowWhereInput[]>;
  
  OR?: Maybe<WorkflowWhereInput[]>;
  
  NOT?: Maybe<WorkflowWhereInput[]>;
}

export interface InviteWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  email?: Maybe<string>;
  
  email_not?: Maybe<string>;
  
  email_in?: Maybe<string[]>;
  
  email_not_in?: Maybe<string[]>;
  
  email_lt?: Maybe<string>;
  
  email_lte?: Maybe<string>;
  
  email_gt?: Maybe<string>;
  
  email_gte?: Maybe<string>;
  
  email_contains?: Maybe<string>;
  
  email_not_contains?: Maybe<string>;
  
  email_starts_with?: Maybe<string>;
  
  email_not_starts_with?: Maybe<string>;
  
  email_ends_with?: Maybe<string>;
  
  email_not_ends_with?: Maybe<string>;
  
  expireAt?: Maybe<DateTime>;
  
  expireAt_not?: Maybe<DateTime>;
  
  expireAt_in?: Maybe<DateTime[]>;
  
  expireAt_not_in?: Maybe<DateTime[]>;
  
  expireAt_lt?: Maybe<DateTime>;
  
  expireAt_lte?: Maybe<DateTime>;
  
  expireAt_gt?: Maybe<DateTime>;
  
  expireAt_gte?: Maybe<DateTime>;
  
  invitedBy?: Maybe<UserWhereInput>;
  
  AND?: Maybe<InviteWhereInput[]>;
  
  OR?: Maybe<InviteWhereInput[]>;
  
  NOT?: Maybe<InviteWhereInput[]>;
}

export interface CommentWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  createdBy?: Maybe<UserWhereInput>;
  
  parent?: Maybe<CommentWhereInput>;
  
  content?: Maybe<string>;
  
  content_not?: Maybe<string>;
  
  content_in?: Maybe<string[]>;
  
  content_not_in?: Maybe<string[]>;
  
  content_lt?: Maybe<string>;
  
  content_lte?: Maybe<string>;
  
  content_gt?: Maybe<string>;
  
  content_gte?: Maybe<string>;
  
  content_contains?: Maybe<string>;
  
  content_not_contains?: Maybe<string>;
  
  content_starts_with?: Maybe<string>;
  
  content_not_starts_with?: Maybe<string>;
  
  content_ends_with?: Maybe<string>;
  
  content_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<CommentWhereInput[]>;
  
  OR?: Maybe<CommentWhereInput[]>;
  
  NOT?: Maybe<CommentWhereInput[]>;
}

export interface LocationWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  country?: Maybe<string>;
  
  country_not?: Maybe<string>;
  
  country_in?: Maybe<string[]>;
  
  country_not_in?: Maybe<string[]>;
  
  country_lt?: Maybe<string>;
  
  country_lte?: Maybe<string>;
  
  country_gt?: Maybe<string>;
  
  country_gte?: Maybe<string>;
  
  country_contains?: Maybe<string>;
  
  country_not_contains?: Maybe<string>;
  
  country_starts_with?: Maybe<string>;
  
  country_not_starts_with?: Maybe<string>;
  
  country_ends_with?: Maybe<string>;
  
  country_not_ends_with?: Maybe<string>;
  
  region?: Maybe<string>;
  
  region_not?: Maybe<string>;
  
  region_in?: Maybe<string[]>;
  
  region_not_in?: Maybe<string[]>;
  
  region_lt?: Maybe<string>;
  
  region_lte?: Maybe<string>;
  
  region_gt?: Maybe<string>;
  
  region_gte?: Maybe<string>;
  
  region_contains?: Maybe<string>;
  
  region_not_contains?: Maybe<string>;
  
  region_starts_with?: Maybe<string>;
  
  region_not_starts_with?: Maybe<string>;
  
  region_ends_with?: Maybe<string>;
  
  region_not_ends_with?: Maybe<string>;
  
  city?: Maybe<string>;
  
  city_not?: Maybe<string>;
  
  city_in?: Maybe<string[]>;
  
  city_not_in?: Maybe<string[]>;
  
  city_lt?: Maybe<string>;
  
  city_lte?: Maybe<string>;
  
  city_gt?: Maybe<string>;
  
  city_gte?: Maybe<string>;
  
  city_contains?: Maybe<string>;
  
  city_not_contains?: Maybe<string>;
  
  city_starts_with?: Maybe<string>;
  
  city_not_starts_with?: Maybe<string>;
  
  city_ends_with?: Maybe<string>;
  
  city_not_ends_with?: Maybe<string>;
  
  zip?: Maybe<string>;
  
  zip_not?: Maybe<string>;
  
  zip_in?: Maybe<string[]>;
  
  zip_not_in?: Maybe<string[]>;
  
  zip_lt?: Maybe<string>;
  
  zip_lte?: Maybe<string>;
  
  zip_gt?: Maybe<string>;
  
  zip_gte?: Maybe<string>;
  
  zip_contains?: Maybe<string>;
  
  zip_not_contains?: Maybe<string>;
  
  zip_starts_with?: Maybe<string>;
  
  zip_not_starts_with?: Maybe<string>;
  
  zip_ends_with?: Maybe<string>;
  
  zip_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<LocationWhereInput[]>;
  
  OR?: Maybe<LocationWhereInput[]>;
  
  NOT?: Maybe<LocationWhereInput[]>;
}

export interface CandidateWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface JobWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface SourceWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface TagWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface TaskWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface UserWhereUniqueInput {
  
  id?: Maybe<string>;
  
  email?: Maybe<string>;
}

export interface WorkflowWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface ApplicationCreateInput {
  
  type: ApplicationType;
  
  disqualification?: Maybe<DisqualificationInstanceCreateOneInput>;
  
  stage: StageCreateOneInput;
  
  reviews?: Maybe<ReviewInstanceCreateManyInput>;
  
  job: JobCreateOneWithoutApplicationsInput;
  
  candidate: CandidateCreateOneWithoutApplicationsInput;
}

export interface DisqualificationInstanceCreateOneInput {
  
  create?: Maybe<DisqualificationInstanceCreateInput>;
  
  connect?: Maybe<DisqualificationInstanceWhereUniqueInput>;
}

export interface DisqualificationInstanceCreateInput {
  
  prototype: DisqualificationCreateOneInput;
  
  createdBy: UserCreateOneInput;
  
  content?: Maybe<string>;
}

export interface DisqualificationCreateOneInput {
  
  create?: Maybe<DisqualificationCreateInput>;
  
  connect?: Maybe<DisqualificationWhereUniqueInput>;
}

export interface DisqualificationCreateInput {
  
  name: string;
  
  description?: Maybe<string>;
}

export interface DisqualificationWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface UserCreateOneInput {
  
  create?: Maybe<UserCreateInput>;
  
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  
  settings?: Maybe<Json>;
  
  tasks?: Maybe<TaskCreateManyWithoutOwnersInput>;
  
  firstName: string;
  
  lastName: string;
  
  email: string;
  
  username: string;
  
  lastLogin?: Maybe<DateTime>;
  
  deletedAt?: Maybe<DateTime>;
  
  position?: Maybe<string>;
  
  avatar?: Maybe<FileCreateOneInput>;
}

export interface TaskCreateManyWithoutOwnersInput {
  
  create?: Maybe<TaskCreateWithoutOwnersInput[]>;
  
  connect?: Maybe<TaskWhereUniqueInput[]>;
}

export interface TaskCreateWithoutOwnersInput {
  
  candidate?: Maybe<CandidateCreateOneWithoutTasksInput>;
  
  title?: Maybe<string>;
  
  description?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
}

export interface CandidateCreateOneWithoutTasksInput {
  
  create?: Maybe<CandidateCreateWithoutTasksInput>;
  
  connect?: Maybe<CandidateWhereUniqueInput>;
}

export interface CandidateCreateWithoutTasksInput {
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  emails?: Maybe<CandidateCreateemailsInput>;
  
  phones?: Maybe<CandidateCreatephonesInput>;
  
  links?: Maybe<CandidateCreatelinksInput>;
  
  avatar?: Maybe<FileCreateOneInput>;
  
  company?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  position?: Maybe<string>;
  
  resumesString?: Maybe<CandidateCreateresumesStringInput>;
  
  resumesFile?: Maybe<FileCreateManyInput>;
  
  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;
  
  coverLettersFile?: Maybe<FileCreateManyInput>;
  
  tags?: Maybe<TagCreateManyInput>;
  
  sources?: Maybe<SourceCreateManyInput>;
  
  fields?: Maybe<FieldInstanceCreateManyInput>;
  
  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>;
  
  comments?: Maybe<CommentCreateManyInput>;
}

export interface CandidateCreateemailsInput {
  
  set?: Maybe<string[]>;
}

export interface CandidateCreatephonesInput {
  
  set?: Maybe<string[]>;
}

export interface CandidateCreatelinksInput {
  
  set?: Maybe<string[]>;
}

export interface FileCreateOneInput {
  
  create?: Maybe<FileCreateInput>;
  
  connect?: Maybe<FileWhereUniqueInput>;
}

export interface FileCreateInput {
  
  size: number;
  
  type: string;
  
  name: string;
  
  url: string;
}

export interface FileWhereUniqueInput {
  
  id?: Maybe<string>;
  
  url?: Maybe<string>;
}

export interface CandidateCreateresumesStringInput {
  
  set?: Maybe<string[]>;
}

export interface FileCreateManyInput {
  
  create?: Maybe<FileCreateInput[]>;
  
  connect?: Maybe<FileWhereUniqueInput[]>;
}

export interface CandidateCreatecoverLettersStringInput {
  
  set?: Maybe<string[]>;
}

export interface TagCreateManyInput {
  
  create?: Maybe<TagCreateInput[]>;
  
  connect?: Maybe<TagWhereUniqueInput[]>;
}

export interface TagCreateInput {
  
  label: string;
  
  description?: Maybe<string>;
}

export interface SourceCreateManyInput {
  
  create?: Maybe<SourceCreateInput[]>;
  
  connect?: Maybe<SourceWhereUniqueInput[]>;
}

export interface SourceCreateInput {
  
  label: string;
  
  description?: Maybe<string>;
}

export interface FieldInstanceCreateManyInput {
  
  create?: Maybe<FieldInstanceCreateInput[]>;
  
  connect?: Maybe<FieldInstanceWhereUniqueInput[]>;
}

export interface FieldInstanceCreateInput {
  
  prototype: FieldCreateOneInput;
  
  value?: Maybe<string>;
}

export interface FieldCreateOneInput {
  
  create?: Maybe<FieldCreateInput>;
  
  connect?: Maybe<FieldWhereUniqueInput>;
}

export interface FieldCreateInput {
  
  type: FieldType;
  
  label: string;
  
  description?: Maybe<string>;
}

export interface FieldWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface FieldInstanceWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface ApplicationCreateManyWithoutCandidateInput {
  
  create?: Maybe<ApplicationCreateWithoutCandidateInput[]>;
  
  connect?: Maybe<ApplicationWhereUniqueInput[]>;
}

export interface ApplicationCreateWithoutCandidateInput {
  
  type: ApplicationType;
  
  disqualification?: Maybe<DisqualificationInstanceCreateOneInput>;
  
  stage: StageCreateOneInput;
  
  reviews?: Maybe<ReviewInstanceCreateManyInput>;
  
  job: JobCreateOneWithoutApplicationsInput;
}

export interface StageCreateOneInput {
  
  create?: Maybe<StageCreateInput>;
  
  connect?: Maybe<StageWhereUniqueInput>;
}

export interface StageCreateInput {
  
  name: string;
  
  description?: Maybe<string>;
  
  type: StageType;
}

export interface StageWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface ReviewInstanceCreateManyInput {
  
  create?: Maybe<ReviewInstanceCreateInput[]>;
  
  connect?: Maybe<ReviewInstanceWhereUniqueInput[]>;
}

export interface ReviewInstanceCreateInput {
  
  prototype?: Maybe<ReviewCreateOneInput>;
  
  fields?: Maybe<FieldInstanceCreateManyInput>;
  
  createdBy: UserCreateOneInput;
  
  rating?: Maybe<number>;
  
  content?: Maybe<string>;
}

export interface ReviewCreateOneInput {
  
  create?: Maybe<ReviewCreateInput>;
  
  connect?: Maybe<ReviewWhereUniqueInput>;
}

export interface ReviewCreateInput {
  
  name: string;
  
  fields?: Maybe<FieldCreateManyInput>;
}

export interface FieldCreateManyInput {
  
  create?: Maybe<FieldCreateInput[]>;
  
  connect?: Maybe<FieldWhereUniqueInput[]>;
}

export interface ReviewWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface ReviewInstanceWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface JobCreateOneWithoutApplicationsInput {
  
  create?: Maybe<JobCreateWithoutApplicationsInput>;
  
  connect?: Maybe<JobWhereUniqueInput>;
}

export interface JobCreateWithoutApplicationsInput {
  
  workspace: WorkspaceCreateOneWithoutJobsInput;
  
  workflow: WorkflowCreateOneWithoutJobsInput;
  
  comments?: Maybe<CommentCreateManyInput>;
  
  type: JobType;
  
  department?: Maybe<string>;
  
  locations?: Maybe<LocationCreateManyInput>;
  
  name: string;
  
  excerpt?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  description?: Maybe<string>;
  
  requirements?: Maybe<string>;
}

export interface WorkspaceCreateOneWithoutJobsInput {
  
  create?: Maybe<WorkspaceCreateWithoutJobsInput>;
  
  connect?: Maybe<WorkspaceWhereUniqueInput>;
}

export interface WorkspaceCreateWithoutJobsInput {
  
  users?: Maybe<UserCreateManyInput>;
  
  candidates?: Maybe<CandidateCreateManyInput>;
  
  settings?: Maybe<Json>;
  
  workflows?: Maybe<WorkflowCreateManyInput>;
  
  invites?: Maybe<InviteCreateManyInput>;
  
  name: string;
}

export interface UserCreateManyInput {
  
  create?: Maybe<UserCreateInput[]>;
  
  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface CandidateCreateManyInput {
  
  create?: Maybe<CandidateCreateInput[]>;
  
  connect?: Maybe<CandidateWhereUniqueInput[]>;
}

export interface CandidateCreateInput {
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  emails?: Maybe<CandidateCreateemailsInput>;
  
  phones?: Maybe<CandidateCreatephonesInput>;
  
  links?: Maybe<CandidateCreatelinksInput>;
  
  avatar?: Maybe<FileCreateOneInput>;
  
  company?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  position?: Maybe<string>;
  
  resumesString?: Maybe<CandidateCreateresumesStringInput>;
  
  resumesFile?: Maybe<FileCreateManyInput>;
  
  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;
  
  coverLettersFile?: Maybe<FileCreateManyInput>;
  
  tags?: Maybe<TagCreateManyInput>;
  
  sources?: Maybe<SourceCreateManyInput>;
  
  fields?: Maybe<FieldInstanceCreateManyInput>;
  
  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>;
  
  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>;
  
  comments?: Maybe<CommentCreateManyInput>;
}

export interface TaskCreateManyWithoutCandidateInput {
  
  create?: Maybe<TaskCreateWithoutCandidateInput[]>;
  
  connect?: Maybe<TaskWhereUniqueInput[]>;
}

export interface TaskCreateWithoutCandidateInput {
  
  owners?: Maybe<UserCreateManyWithoutTasksInput>;
  
  title?: Maybe<string>;
  
  description?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
}

export interface UserCreateManyWithoutTasksInput {
  
  create?: Maybe<UserCreateWithoutTasksInput[]>;
  
  connect?: Maybe<UserWhereUniqueInput[]>;
}

export interface UserCreateWithoutTasksInput {
  
  settings?: Maybe<Json>;
  
  firstName: string;
  
  lastName: string;
  
  email: string;
  
  username: string;
  
  lastLogin?: Maybe<DateTime>;
  
  deletedAt?: Maybe<DateTime>;
  
  position?: Maybe<string>;
  
  avatar?: Maybe<FileCreateOneInput>;
}

export interface CommentCreateManyInput {
  
  create?: Maybe<CommentCreateInput[]>;
  
  connect?: Maybe<CommentWhereUniqueInput[]>;
}

export interface CommentCreateInput {
  
  createdBy: UserCreateOneInput;
  
  parent?: Maybe<CommentCreateOneInput>;
  
  content: string;
}

export interface CommentCreateOneInput {
  
  create?: Maybe<CommentCreateInput>;
  
  connect?: Maybe<CommentWhereUniqueInput>;
}

export interface CommentWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface WorkflowCreateManyInput {
  
  create?: Maybe<WorkflowCreateInput[]>;
  
  connect?: Maybe<WorkflowWhereUniqueInput[]>;
}

export interface WorkflowCreateInput {
  
  jobs?: Maybe<JobCreateManyWithoutWorkflowInput>;
  
  name: string;
  
  description?: Maybe<string>;
  
  stages?: Maybe<StageCreateManyInput>;
  
  disqualifications?: Maybe<DisqualificationCreateManyInput>;
  
  fields?: Maybe<FieldCreateManyInput>;
  
  reviews?: Maybe<ReviewCreateManyInput>;
}

export interface JobCreateManyWithoutWorkflowInput {
  
  create?: Maybe<JobCreateWithoutWorkflowInput[]>;
  
  connect?: Maybe<JobWhereUniqueInput[]>;
}

export interface JobCreateWithoutWorkflowInput {
  
  workspace: WorkspaceCreateOneWithoutJobsInput;
  
  applications?: Maybe<ApplicationCreateManyWithoutJobInput>;
  
  comments?: Maybe<CommentCreateManyInput>;
  
  type: JobType;
  
  department?: Maybe<string>;
  
  locations?: Maybe<LocationCreateManyInput>;
  
  name: string;
  
  excerpt?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  description?: Maybe<string>;
  
  requirements?: Maybe<string>;
}

export interface ApplicationCreateManyWithoutJobInput {
  
  create?: Maybe<ApplicationCreateWithoutJobInput[]>;
  
  connect?: Maybe<ApplicationWhereUniqueInput[]>;
}

export interface ApplicationCreateWithoutJobInput {
  
  type: ApplicationType;
  
  disqualification?: Maybe<DisqualificationInstanceCreateOneInput>;
  
  stage: StageCreateOneInput;
  
  reviews?: Maybe<ReviewInstanceCreateManyInput>;
  
  candidate: CandidateCreateOneWithoutApplicationsInput;
}

export interface CandidateCreateOneWithoutApplicationsInput {
  
  create?: Maybe<CandidateCreateWithoutApplicationsInput>;
  
  connect?: Maybe<CandidateWhereUniqueInput>;
}

export interface CandidateCreateWithoutApplicationsInput {
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  emails?: Maybe<CandidateCreateemailsInput>;
  
  phones?: Maybe<CandidateCreatephonesInput>;
  
  links?: Maybe<CandidateCreatelinksInput>;
  
  avatar?: Maybe<FileCreateOneInput>;
  
  company?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  position?: Maybe<string>;
  
  resumesString?: Maybe<CandidateCreateresumesStringInput>;
  
  resumesFile?: Maybe<FileCreateManyInput>;
  
  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>;
  
  coverLettersFile?: Maybe<FileCreateManyInput>;
  
  tags?: Maybe<TagCreateManyInput>;
  
  sources?: Maybe<SourceCreateManyInput>;
  
  fields?: Maybe<FieldInstanceCreateManyInput>;
  
  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>;
  
  comments?: Maybe<CommentCreateManyInput>;
}

export interface LocationCreateManyInput {
  
  create?: Maybe<LocationCreateInput[]>;
  
  connect?: Maybe<LocationWhereUniqueInput[]>;
}

export interface LocationCreateInput {
  
  country: string;
  
  region?: Maybe<string>;
  
  city: string;
  
  zip?: Maybe<string>;
}

export interface LocationWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface StageCreateManyInput {
  
  create?: Maybe<StageCreateInput[]>;
  
  connect?: Maybe<StageWhereUniqueInput[]>;
}

export interface DisqualificationCreateManyInput {
  
  create?: Maybe<DisqualificationCreateInput[]>;
  
  connect?: Maybe<DisqualificationWhereUniqueInput[]>;
}

export interface ReviewCreateManyInput {
  
  create?: Maybe<ReviewCreateInput[]>;
  
  connect?: Maybe<ReviewWhereUniqueInput[]>;
}

export interface InviteCreateManyInput {
  
  create?: Maybe<InviteCreateInput[]>;
  
  connect?: Maybe<InviteWhereUniqueInput[]>;
}

export interface InviteCreateInput {
  
  email: string;
}

export interface InviteWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface WorkspaceWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface WorkflowCreateOneWithoutJobsInput {
  
  create?: Maybe<WorkflowCreateWithoutJobsInput>;
  
  connect?: Maybe<WorkflowWhereUniqueInput>;
}

export interface WorkflowCreateWithoutJobsInput {
  
  name: string;
  
  description?: Maybe<string>;
  
  stages?: Maybe<StageCreateManyInput>;
  
  disqualifications?: Maybe<DisqualificationCreateManyInput>;
  
  fields?: Maybe<FieldCreateManyInput>;
  
  reviews?: Maybe<ReviewCreateManyInput>;
}

export interface DisqualificationInstanceWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface ApplicationUpdateInput {
  
  type?: Maybe<ApplicationType>;
  
  disqualification?: Maybe<DisqualificationInstanceUpdateOneInput>;
  
  stage?: Maybe<StageUpdateOneRequiredInput>;
  
  reviews?: Maybe<ReviewInstanceUpdateManyInput>;
  
  job?: Maybe<JobUpdateOneRequiredWithoutApplicationsInput>;
  
  candidate?: Maybe<CandidateUpdateOneRequiredWithoutApplicationsInput>;
}

export interface DisqualificationInstanceUpdateOneInput {
  
  create?: Maybe<DisqualificationInstanceCreateInput>;
  
  update?: Maybe<DisqualificationInstanceUpdateDataInput>;
  
  upsert?: Maybe<DisqualificationInstanceUpsertNestedInput>;
  
  delete?: Maybe<boolean>;
  
  disconnect?: Maybe<boolean>;
  
  connect?: Maybe<DisqualificationInstanceWhereUniqueInput>;
}

export interface DisqualificationInstanceUpdateDataInput {
  
  prototype?: Maybe<DisqualificationUpdateOneRequiredInput>;
  
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  
  content?: Maybe<string>;
}

export interface DisqualificationUpdateOneRequiredInput {
  
  create?: Maybe<DisqualificationCreateInput>;
  
  update?: Maybe<DisqualificationUpdateDataInput>;
  
  upsert?: Maybe<DisqualificationUpsertNestedInput>;
  
  connect?: Maybe<DisqualificationWhereUniqueInput>;
}

export interface DisqualificationUpdateDataInput {
  
  name?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface DisqualificationUpsertNestedInput {
  
  update: DisqualificationUpdateDataInput;
  
  create: DisqualificationCreateInput;
}

export interface UserUpdateOneRequiredInput {
  
  create?: Maybe<UserCreateInput>;
  
  update?: Maybe<UserUpdateDataInput>;
  
  upsert?: Maybe<UserUpsertNestedInput>;
  
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateDataInput {
  
  settings?: Maybe<Json>;
  
  tasks?: Maybe<TaskUpdateManyWithoutOwnersInput>;
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  email?: Maybe<string>;
  
  username?: Maybe<string>;
  
  lastLogin?: Maybe<DateTime>;
  
  deletedAt?: Maybe<DateTime>;
  
  position?: Maybe<string>;
  
  avatar?: Maybe<FileUpdateOneInput>;
}

export interface TaskUpdateManyWithoutOwnersInput {
  
  create?: Maybe<TaskCreateWithoutOwnersInput[]>;
  
  delete?: Maybe<TaskWhereUniqueInput[]>;
  
  connect?: Maybe<TaskWhereUniqueInput[]>;
  
  set?: Maybe<TaskWhereUniqueInput[]>;
  
  disconnect?: Maybe<TaskWhereUniqueInput[]>;
  
  update?: Maybe<TaskUpdateWithWhereUniqueWithoutOwnersInput[]>;
  
  upsert?: Maybe<TaskUpsertWithWhereUniqueWithoutOwnersInput[]>;
  
  deleteMany?: Maybe<TaskScalarWhereInput[]>;
  
  updateMany?: Maybe<TaskUpdateManyWithWhereNestedInput[]>;
}

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  
  where: TaskWhereUniqueInput;
  
  data: TaskUpdateWithoutOwnersDataInput;
}

export interface TaskUpdateWithoutOwnersDataInput {
  
  candidate?: Maybe<CandidateUpdateOneWithoutTasksInput>;
  
  title?: Maybe<string>;
  
  description?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
}

export interface CandidateUpdateOneWithoutTasksInput {
  
  create?: Maybe<CandidateCreateWithoutTasksInput>;
  
  update?: Maybe<CandidateUpdateWithoutTasksDataInput>;
  
  upsert?: Maybe<CandidateUpsertWithoutTasksInput>;
  
  delete?: Maybe<boolean>;
  
  disconnect?: Maybe<boolean>;
  
  connect?: Maybe<CandidateWhereUniqueInput>;
}

export interface CandidateUpdateWithoutTasksDataInput {
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  emails?: Maybe<CandidateUpdateemailsInput>;
  
  phones?: Maybe<CandidateUpdatephonesInput>;
  
  links?: Maybe<CandidateUpdatelinksInput>;
  
  avatar?: Maybe<FileUpdateOneInput>;
  
  company?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  position?: Maybe<string>;
  
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  
  resumesFile?: Maybe<FileUpdateManyInput>;
  
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
  
  coverLettersFile?: Maybe<FileUpdateManyInput>;
  
  tags?: Maybe<TagUpdateManyInput>;
  
  sources?: Maybe<SourceUpdateManyInput>;
  
  fields?: Maybe<FieldInstanceUpdateManyInput>;
  
  applications?: Maybe<ApplicationUpdateManyWithoutCandidateInput>;
  
  comments?: Maybe<CommentUpdateManyInput>;
}

export interface CandidateUpdateemailsInput {
  
  set?: Maybe<string[]>;
}

export interface CandidateUpdatephonesInput {
  
  set?: Maybe<string[]>;
}

export interface CandidateUpdatelinksInput {
  
  set?: Maybe<string[]>;
}

export interface FileUpdateOneInput {
  
  create?: Maybe<FileCreateInput>;
  
  update?: Maybe<FileUpdateDataInput>;
  
  upsert?: Maybe<FileUpsertNestedInput>;
  
  delete?: Maybe<boolean>;
  
  disconnect?: Maybe<boolean>;
  
  connect?: Maybe<FileWhereUniqueInput>;
}

export interface FileUpdateDataInput {
  
  size?: Maybe<number>;
  
  type?: Maybe<string>;
  
  name?: Maybe<string>;
  
  url?: Maybe<string>;
}

export interface FileUpsertNestedInput {
  
  update: FileUpdateDataInput;
  
  create: FileCreateInput;
}

export interface CandidateUpdateresumesStringInput {
  
  set?: Maybe<string[]>;
}

export interface FileUpdateManyInput {
  
  create?: Maybe<FileCreateInput[]>;
  
  update?: Maybe<FileUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<FileUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<FileWhereUniqueInput[]>;
  
  connect?: Maybe<FileWhereUniqueInput[]>;
  
  set?: Maybe<FileWhereUniqueInput[]>;
  
  disconnect?: Maybe<FileWhereUniqueInput[]>;
  
  deleteMany?: Maybe<FileScalarWhereInput[]>;
  
  updateMany?: Maybe<FileUpdateManyWithWhereNestedInput[]>;
}

export interface FileUpdateWithWhereUniqueNestedInput {
  
  where: FileWhereUniqueInput;
  
  data: FileUpdateDataInput;
}

export interface FileUpsertWithWhereUniqueNestedInput {
  
  where: FileWhereUniqueInput;
  
  update: FileUpdateDataInput;
  
  create: FileCreateInput;
}

export interface FileScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  size?: Maybe<number>;
  
  size_not?: Maybe<number>;
  
  size_in?: Maybe<number[]>;
  
  size_not_in?: Maybe<number[]>;
  
  size_lt?: Maybe<number>;
  
  size_lte?: Maybe<number>;
  
  size_gt?: Maybe<number>;
  
  size_gte?: Maybe<number>;
  
  type?: Maybe<string>;
  
  type_not?: Maybe<string>;
  
  type_in?: Maybe<string[]>;
  
  type_not_in?: Maybe<string[]>;
  
  type_lt?: Maybe<string>;
  
  type_lte?: Maybe<string>;
  
  type_gt?: Maybe<string>;
  
  type_gte?: Maybe<string>;
  
  type_contains?: Maybe<string>;
  
  type_not_contains?: Maybe<string>;
  
  type_starts_with?: Maybe<string>;
  
  type_not_starts_with?: Maybe<string>;
  
  type_ends_with?: Maybe<string>;
  
  type_not_ends_with?: Maybe<string>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  url?: Maybe<string>;
  
  url_not?: Maybe<string>;
  
  url_in?: Maybe<string[]>;
  
  url_not_in?: Maybe<string[]>;
  
  url_lt?: Maybe<string>;
  
  url_lte?: Maybe<string>;
  
  url_gt?: Maybe<string>;
  
  url_gte?: Maybe<string>;
  
  url_contains?: Maybe<string>;
  
  url_not_contains?: Maybe<string>;
  
  url_starts_with?: Maybe<string>;
  
  url_not_starts_with?: Maybe<string>;
  
  url_ends_with?: Maybe<string>;
  
  url_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<FileScalarWhereInput[]>;
  
  OR?: Maybe<FileScalarWhereInput[]>;
  
  NOT?: Maybe<FileScalarWhereInput[]>;
}

export interface FileUpdateManyWithWhereNestedInput {
  
  where: FileScalarWhereInput;
  
  data: FileUpdateManyDataInput;
}

export interface FileUpdateManyDataInput {
  
  size?: Maybe<number>;
  
  type?: Maybe<string>;
  
  name?: Maybe<string>;
  
  url?: Maybe<string>;
}

export interface CandidateUpdatecoverLettersStringInput {
  
  set?: Maybe<string[]>;
}

export interface TagUpdateManyInput {
  
  create?: Maybe<TagCreateInput[]>;
  
  update?: Maybe<TagUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<TagUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<TagWhereUniqueInput[]>;
  
  connect?: Maybe<TagWhereUniqueInput[]>;
  
  set?: Maybe<TagWhereUniqueInput[]>;
  
  disconnect?: Maybe<TagWhereUniqueInput[]>;
  
  deleteMany?: Maybe<TagScalarWhereInput[]>;
  
  updateMany?: Maybe<TagUpdateManyWithWhereNestedInput[]>;
}

export interface TagUpdateWithWhereUniqueNestedInput {
  
  where: TagWhereUniqueInput;
  
  data: TagUpdateDataInput;
}

export interface TagUpdateDataInput {
  
  label?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface TagUpsertWithWhereUniqueNestedInput {
  
  where: TagWhereUniqueInput;
  
  update: TagUpdateDataInput;
  
  create: TagCreateInput;
}

export interface TagScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  label?: Maybe<string>;
  
  label_not?: Maybe<string>;
  
  label_in?: Maybe<string[]>;
  
  label_not_in?: Maybe<string[]>;
  
  label_lt?: Maybe<string>;
  
  label_lte?: Maybe<string>;
  
  label_gt?: Maybe<string>;
  
  label_gte?: Maybe<string>;
  
  label_contains?: Maybe<string>;
  
  label_not_contains?: Maybe<string>;
  
  label_starts_with?: Maybe<string>;
  
  label_not_starts_with?: Maybe<string>;
  
  label_ends_with?: Maybe<string>;
  
  label_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<TagScalarWhereInput[]>;
  
  OR?: Maybe<TagScalarWhereInput[]>;
  
  NOT?: Maybe<TagScalarWhereInput[]>;
}

export interface TagUpdateManyWithWhereNestedInput {
  
  where: TagScalarWhereInput;
  
  data: TagUpdateManyDataInput;
}

export interface TagUpdateManyDataInput {
  
  label?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface SourceUpdateManyInput {
  
  create?: Maybe<SourceCreateInput[]>;
  
  update?: Maybe<SourceUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<SourceUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<SourceWhereUniqueInput[]>;
  
  connect?: Maybe<SourceWhereUniqueInput[]>;
  
  set?: Maybe<SourceWhereUniqueInput[]>;
  
  disconnect?: Maybe<SourceWhereUniqueInput[]>;
  
  deleteMany?: Maybe<SourceScalarWhereInput[]>;
  
  updateMany?: Maybe<SourceUpdateManyWithWhereNestedInput[]>;
}

export interface SourceUpdateWithWhereUniqueNestedInput {
  
  where: SourceWhereUniqueInput;
  
  data: SourceUpdateDataInput;
}

export interface SourceUpdateDataInput {
  
  label?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface SourceUpsertWithWhereUniqueNestedInput {
  
  where: SourceWhereUniqueInput;
  
  update: SourceUpdateDataInput;
  
  create: SourceCreateInput;
}

export interface SourceScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  label?: Maybe<string>;
  
  label_not?: Maybe<string>;
  
  label_in?: Maybe<string[]>;
  
  label_not_in?: Maybe<string[]>;
  
  label_lt?: Maybe<string>;
  
  label_lte?: Maybe<string>;
  
  label_gt?: Maybe<string>;
  
  label_gte?: Maybe<string>;
  
  label_contains?: Maybe<string>;
  
  label_not_contains?: Maybe<string>;
  
  label_starts_with?: Maybe<string>;
  
  label_not_starts_with?: Maybe<string>;
  
  label_ends_with?: Maybe<string>;
  
  label_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<SourceScalarWhereInput[]>;
  
  OR?: Maybe<SourceScalarWhereInput[]>;
  
  NOT?: Maybe<SourceScalarWhereInput[]>;
}

export interface SourceUpdateManyWithWhereNestedInput {
  
  where: SourceScalarWhereInput;
  
  data: SourceUpdateManyDataInput;
}

export interface SourceUpdateManyDataInput {
  
  label?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface FieldInstanceUpdateManyInput {
  
  create?: Maybe<FieldInstanceCreateInput[]>;
  
  update?: Maybe<FieldInstanceUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<FieldInstanceUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<FieldInstanceWhereUniqueInput[]>;
  
  connect?: Maybe<FieldInstanceWhereUniqueInput[]>;
  
  set?: Maybe<FieldInstanceWhereUniqueInput[]>;
  
  disconnect?: Maybe<FieldInstanceWhereUniqueInput[]>;
  
  deleteMany?: Maybe<FieldInstanceScalarWhereInput[]>;
  
  updateMany?: Maybe<FieldInstanceUpdateManyWithWhereNestedInput[]>;
}

export interface FieldInstanceUpdateWithWhereUniqueNestedInput {
  
  where: FieldInstanceWhereUniqueInput;
  
  data: FieldInstanceUpdateDataInput;
}

export interface FieldInstanceUpdateDataInput {
  
  prototype?: Maybe<FieldUpdateOneRequiredInput>;
  
  value?: Maybe<string>;
}

export interface FieldUpdateOneRequiredInput {
  
  create?: Maybe<FieldCreateInput>;
  
  update?: Maybe<FieldUpdateDataInput>;
  
  upsert?: Maybe<FieldUpsertNestedInput>;
  
  connect?: Maybe<FieldWhereUniqueInput>;
}

export interface FieldUpdateDataInput {
  
  type?: Maybe<FieldType>;
  
  label?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface FieldUpsertNestedInput {
  
  update: FieldUpdateDataInput;
  
  create: FieldCreateInput;
}

export interface FieldInstanceUpsertWithWhereUniqueNestedInput {
  
  where: FieldInstanceWhereUniqueInput;
  
  update: FieldInstanceUpdateDataInput;
  
  create: FieldInstanceCreateInput;
}

export interface FieldInstanceScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  value?: Maybe<string>;
  
  value_not?: Maybe<string>;
  
  value_in?: Maybe<string[]>;
  
  value_not_in?: Maybe<string[]>;
  
  value_lt?: Maybe<string>;
  
  value_lte?: Maybe<string>;
  
  value_gt?: Maybe<string>;
  
  value_gte?: Maybe<string>;
  
  value_contains?: Maybe<string>;
  
  value_not_contains?: Maybe<string>;
  
  value_starts_with?: Maybe<string>;
  
  value_not_starts_with?: Maybe<string>;
  
  value_ends_with?: Maybe<string>;
  
  value_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<FieldInstanceScalarWhereInput[]>;
  
  OR?: Maybe<FieldInstanceScalarWhereInput[]>;
  
  NOT?: Maybe<FieldInstanceScalarWhereInput[]>;
}

export interface FieldInstanceUpdateManyWithWhereNestedInput {
  
  where: FieldInstanceScalarWhereInput;
  
  data: FieldInstanceUpdateManyDataInput;
}

export interface FieldInstanceUpdateManyDataInput {
  
  value?: Maybe<string>;
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  
  create?: Maybe<ApplicationCreateWithoutCandidateInput[]>;
  
  delete?: Maybe<ApplicationWhereUniqueInput[]>;
  
  connect?: Maybe<ApplicationWhereUniqueInput[]>;
  
  set?: Maybe<ApplicationWhereUniqueInput[]>;
  
  disconnect?: Maybe<ApplicationWhereUniqueInput[]>;
  
  update?: Maybe<ApplicationUpdateWithWhereUniqueWithoutCandidateInput[]>;
  
  upsert?: Maybe<ApplicationUpsertWithWhereUniqueWithoutCandidateInput[]>;
  
  deleteMany?: Maybe<ApplicationScalarWhereInput[]>;
  
  updateMany?: Maybe<ApplicationUpdateManyWithWhereNestedInput[]>;
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  
  where: ApplicationWhereUniqueInput;
  
  data: ApplicationUpdateWithoutCandidateDataInput;
}

export interface ApplicationUpdateWithoutCandidateDataInput {
  
  type?: Maybe<ApplicationType>;
  
  disqualification?: Maybe<DisqualificationInstanceUpdateOneInput>;
  
  stage?: Maybe<StageUpdateOneRequiredInput>;
  
  reviews?: Maybe<ReviewInstanceUpdateManyInput>;
  
  job?: Maybe<JobUpdateOneRequiredWithoutApplicationsInput>;
}

export interface StageUpdateOneRequiredInput {
  
  create?: Maybe<StageCreateInput>;
  
  update?: Maybe<StageUpdateDataInput>;
  
  upsert?: Maybe<StageUpsertNestedInput>;
  
  connect?: Maybe<StageWhereUniqueInput>;
}

export interface StageUpdateDataInput {
  
  name?: Maybe<string>;
  
  description?: Maybe<string>;
  
  type?: Maybe<StageType>;
}

export interface StageUpsertNestedInput {
  
  update: StageUpdateDataInput;
  
  create: StageCreateInput;
}

export interface ReviewInstanceUpdateManyInput {
  
  create?: Maybe<ReviewInstanceCreateInput[]>;
  
  update?: Maybe<ReviewInstanceUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<ReviewInstanceUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<ReviewInstanceWhereUniqueInput[]>;
  
  connect?: Maybe<ReviewInstanceWhereUniqueInput[]>;
  
  set?: Maybe<ReviewInstanceWhereUniqueInput[]>;
  
  disconnect?: Maybe<ReviewInstanceWhereUniqueInput[]>;
  
  deleteMany?: Maybe<ReviewInstanceScalarWhereInput[]>;
  
  updateMany?: Maybe<ReviewInstanceUpdateManyWithWhereNestedInput[]>;
}

export interface ReviewInstanceUpdateWithWhereUniqueNestedInput {
  
  where: ReviewInstanceWhereUniqueInput;
  
  data: ReviewInstanceUpdateDataInput;
}

export interface ReviewInstanceUpdateDataInput {
  
  prototype?: Maybe<ReviewUpdateOneInput>;
  
  fields?: Maybe<FieldInstanceUpdateManyInput>;
  
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  
  rating?: Maybe<number>;
  
  content?: Maybe<string>;
}

export interface ReviewUpdateOneInput {
  
  create?: Maybe<ReviewCreateInput>;
  
  update?: Maybe<ReviewUpdateDataInput>;
  
  upsert?: Maybe<ReviewUpsertNestedInput>;
  
  delete?: Maybe<boolean>;
  
  disconnect?: Maybe<boolean>;
  
  connect?: Maybe<ReviewWhereUniqueInput>;
}

export interface ReviewUpdateDataInput {
  
  name?: Maybe<string>;
  
  fields?: Maybe<FieldUpdateManyInput>;
}

export interface FieldUpdateManyInput {
  
  create?: Maybe<FieldCreateInput[]>;
  
  update?: Maybe<FieldUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<FieldUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<FieldWhereUniqueInput[]>;
  
  connect?: Maybe<FieldWhereUniqueInput[]>;
  
  set?: Maybe<FieldWhereUniqueInput[]>;
  
  disconnect?: Maybe<FieldWhereUniqueInput[]>;
  
  deleteMany?: Maybe<FieldScalarWhereInput[]>;
  
  updateMany?: Maybe<FieldUpdateManyWithWhereNestedInput[]>;
}

export interface FieldUpdateWithWhereUniqueNestedInput {
  
  where: FieldWhereUniqueInput;
  
  data: FieldUpdateDataInput;
}

export interface FieldUpsertWithWhereUniqueNestedInput {
  
  where: FieldWhereUniqueInput;
  
  update: FieldUpdateDataInput;
  
  create: FieldCreateInput;
}

export interface FieldScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  type?: Maybe<FieldType>;
  
  type_not?: Maybe<FieldType>;
  
  type_in?: Maybe<FieldType[]>;
  
  type_not_in?: Maybe<FieldType[]>;
  
  label?: Maybe<string>;
  
  label_not?: Maybe<string>;
  
  label_in?: Maybe<string[]>;
  
  label_not_in?: Maybe<string[]>;
  
  label_lt?: Maybe<string>;
  
  label_lte?: Maybe<string>;
  
  label_gt?: Maybe<string>;
  
  label_gte?: Maybe<string>;
  
  label_contains?: Maybe<string>;
  
  label_not_contains?: Maybe<string>;
  
  label_starts_with?: Maybe<string>;
  
  label_not_starts_with?: Maybe<string>;
  
  label_ends_with?: Maybe<string>;
  
  label_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<FieldScalarWhereInput[]>;
  
  OR?: Maybe<FieldScalarWhereInput[]>;
  
  NOT?: Maybe<FieldScalarWhereInput[]>;
}

export interface FieldUpdateManyWithWhereNestedInput {
  
  where: FieldScalarWhereInput;
  
  data: FieldUpdateManyDataInput;
}

export interface FieldUpdateManyDataInput {
  
  type?: Maybe<FieldType>;
  
  label?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface ReviewUpsertNestedInput {
  
  update: ReviewUpdateDataInput;
  
  create: ReviewCreateInput;
}

export interface ReviewInstanceUpsertWithWhereUniqueNestedInput {
  
  where: ReviewInstanceWhereUniqueInput;
  
  update: ReviewInstanceUpdateDataInput;
  
  create: ReviewInstanceCreateInput;
}

export interface ReviewInstanceScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  rating?: Maybe<number>;
  
  rating_not?: Maybe<number>;
  
  rating_in?: Maybe<number[]>;
  
  rating_not_in?: Maybe<number[]>;
  
  rating_lt?: Maybe<number>;
  
  rating_lte?: Maybe<number>;
  
  rating_gt?: Maybe<number>;
  
  rating_gte?: Maybe<number>;
  
  content?: Maybe<string>;
  
  content_not?: Maybe<string>;
  
  content_in?: Maybe<string[]>;
  
  content_not_in?: Maybe<string[]>;
  
  content_lt?: Maybe<string>;
  
  content_lte?: Maybe<string>;
  
  content_gt?: Maybe<string>;
  
  content_gte?: Maybe<string>;
  
  content_contains?: Maybe<string>;
  
  content_not_contains?: Maybe<string>;
  
  content_starts_with?: Maybe<string>;
  
  content_not_starts_with?: Maybe<string>;
  
  content_ends_with?: Maybe<string>;
  
  content_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<ReviewInstanceScalarWhereInput[]>;
  
  OR?: Maybe<ReviewInstanceScalarWhereInput[]>;
  
  NOT?: Maybe<ReviewInstanceScalarWhereInput[]>;
}

export interface ReviewInstanceUpdateManyWithWhereNestedInput {
  
  where: ReviewInstanceScalarWhereInput;
  
  data: ReviewInstanceUpdateManyDataInput;
}

export interface ReviewInstanceUpdateManyDataInput {
  
  rating?: Maybe<number>;
  
  content?: Maybe<string>;
}

export interface JobUpdateOneRequiredWithoutApplicationsInput {
  
  create?: Maybe<JobCreateWithoutApplicationsInput>;
  
  update?: Maybe<JobUpdateWithoutApplicationsDataInput>;
  
  upsert?: Maybe<JobUpsertWithoutApplicationsInput>;
  
  connect?: Maybe<JobWhereUniqueInput>;
}

export interface JobUpdateWithoutApplicationsDataInput {
  
  workspace?: Maybe<WorkspaceUpdateOneRequiredWithoutJobsInput>;
  
  workflow?: Maybe<WorkflowUpdateOneRequiredWithoutJobsInput>;
  
  comments?: Maybe<CommentUpdateManyInput>;
  
  type?: Maybe<JobType>;
  
  department?: Maybe<string>;
  
  locations?: Maybe<LocationUpdateManyInput>;
  
  name?: Maybe<string>;
  
  excerpt?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  description?: Maybe<string>;
  
  requirements?: Maybe<string>;
}

export interface WorkspaceUpdateOneRequiredWithoutJobsInput {
  
  create?: Maybe<WorkspaceCreateWithoutJobsInput>;
  
  update?: Maybe<WorkspaceUpdateWithoutJobsDataInput>;
  
  upsert?: Maybe<WorkspaceUpsertWithoutJobsInput>;
  
  connect?: Maybe<WorkspaceWhereUniqueInput>;
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  
  users?: Maybe<UserUpdateManyInput>;
  
  candidates?: Maybe<CandidateUpdateManyInput>;
  
  settings?: Maybe<Json>;
  
  workflows?: Maybe<WorkflowUpdateManyInput>;
  
  invites?: Maybe<InviteUpdateManyInput>;
  
  name?: Maybe<string>;
}

export interface UserUpdateManyInput {
  
  create?: Maybe<UserCreateInput[]>;
  
  update?: Maybe<UserUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<UserUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<UserWhereUniqueInput[]>;
  
  connect?: Maybe<UserWhereUniqueInput[]>;
  
  set?: Maybe<UserWhereUniqueInput[]>;
  
  disconnect?: Maybe<UserWhereUniqueInput[]>;
  
  deleteMany?: Maybe<UserScalarWhereInput[]>;
  
  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>;
}

export interface UserUpdateWithWhereUniqueNestedInput {
  
  where: UserWhereUniqueInput;
  
  data: UserUpdateDataInput;
}

export interface UserUpsertWithWhereUniqueNestedInput {
  
  where: UserWhereUniqueInput;
  
  update: UserUpdateDataInput;
  
  create: UserCreateInput;
}

export interface UserScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  firstName?: Maybe<string>;
  
  firstName_not?: Maybe<string>;
  
  firstName_in?: Maybe<string[]>;
  
  firstName_not_in?: Maybe<string[]>;
  
  firstName_lt?: Maybe<string>;
  
  firstName_lte?: Maybe<string>;
  
  firstName_gt?: Maybe<string>;
  
  firstName_gte?: Maybe<string>;
  
  firstName_contains?: Maybe<string>;
  
  firstName_not_contains?: Maybe<string>;
  
  firstName_starts_with?: Maybe<string>;
  
  firstName_not_starts_with?: Maybe<string>;
  
  firstName_ends_with?: Maybe<string>;
  
  firstName_not_ends_with?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  lastName_not?: Maybe<string>;
  
  lastName_in?: Maybe<string[]>;
  
  lastName_not_in?: Maybe<string[]>;
  
  lastName_lt?: Maybe<string>;
  
  lastName_lte?: Maybe<string>;
  
  lastName_gt?: Maybe<string>;
  
  lastName_gte?: Maybe<string>;
  
  lastName_contains?: Maybe<string>;
  
  lastName_not_contains?: Maybe<string>;
  
  lastName_starts_with?: Maybe<string>;
  
  lastName_not_starts_with?: Maybe<string>;
  
  lastName_ends_with?: Maybe<string>;
  
  lastName_not_ends_with?: Maybe<string>;
  
  email?: Maybe<string>;
  
  email_not?: Maybe<string>;
  
  email_in?: Maybe<string[]>;
  
  email_not_in?: Maybe<string[]>;
  
  email_lt?: Maybe<string>;
  
  email_lte?: Maybe<string>;
  
  email_gt?: Maybe<string>;
  
  email_gte?: Maybe<string>;
  
  email_contains?: Maybe<string>;
  
  email_not_contains?: Maybe<string>;
  
  email_starts_with?: Maybe<string>;
  
  email_not_starts_with?: Maybe<string>;
  
  email_ends_with?: Maybe<string>;
  
  email_not_ends_with?: Maybe<string>;
  
  username?: Maybe<string>;
  
  username_not?: Maybe<string>;
  
  username_in?: Maybe<string[]>;
  
  username_not_in?: Maybe<string[]>;
  
  username_lt?: Maybe<string>;
  
  username_lte?: Maybe<string>;
  
  username_gt?: Maybe<string>;
  
  username_gte?: Maybe<string>;
  
  username_contains?: Maybe<string>;
  
  username_not_contains?: Maybe<string>;
  
  username_starts_with?: Maybe<string>;
  
  username_not_starts_with?: Maybe<string>;
  
  username_ends_with?: Maybe<string>;
  
  username_not_ends_with?: Maybe<string>;
  
  lastLogin?: Maybe<DateTime>;
  
  lastLogin_not?: Maybe<DateTime>;
  
  lastLogin_in?: Maybe<DateTime[]>;
  
  lastLogin_not_in?: Maybe<DateTime[]>;
  
  lastLogin_lt?: Maybe<DateTime>;
  
  lastLogin_lte?: Maybe<DateTime>;
  
  lastLogin_gt?: Maybe<DateTime>;
  
  lastLogin_gte?: Maybe<DateTime>;
  
  deletedAt?: Maybe<DateTime>;
  
  deletedAt_not?: Maybe<DateTime>;
  
  deletedAt_in?: Maybe<DateTime[]>;
  
  deletedAt_not_in?: Maybe<DateTime[]>;
  
  deletedAt_lt?: Maybe<DateTime>;
  
  deletedAt_lte?: Maybe<DateTime>;
  
  deletedAt_gt?: Maybe<DateTime>;
  
  deletedAt_gte?: Maybe<DateTime>;
  
  position?: Maybe<string>;
  
  position_not?: Maybe<string>;
  
  position_in?: Maybe<string[]>;
  
  position_not_in?: Maybe<string[]>;
  
  position_lt?: Maybe<string>;
  
  position_lte?: Maybe<string>;
  
  position_gt?: Maybe<string>;
  
  position_gte?: Maybe<string>;
  
  position_contains?: Maybe<string>;
  
  position_not_contains?: Maybe<string>;
  
  position_starts_with?: Maybe<string>;
  
  position_not_starts_with?: Maybe<string>;
  
  position_ends_with?: Maybe<string>;
  
  position_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<UserScalarWhereInput[]>;
  
  OR?: Maybe<UserScalarWhereInput[]>;
  
  NOT?: Maybe<UserScalarWhereInput[]>;
}

export interface UserUpdateManyWithWhereNestedInput {
  
  where: UserScalarWhereInput;
  
  data: UserUpdateManyDataInput;
}

export interface UserUpdateManyDataInput {
  
  settings?: Maybe<Json>;
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  email?: Maybe<string>;
  
  username?: Maybe<string>;
  
  lastLogin?: Maybe<DateTime>;
  
  deletedAt?: Maybe<DateTime>;
  
  position?: Maybe<string>;
}

export interface CandidateUpdateManyInput {
  
  create?: Maybe<CandidateCreateInput[]>;
  
  update?: Maybe<CandidateUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<CandidateUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<CandidateWhereUniqueInput[]>;
  
  connect?: Maybe<CandidateWhereUniqueInput[]>;
  
  set?: Maybe<CandidateWhereUniqueInput[]>;
  
  disconnect?: Maybe<CandidateWhereUniqueInput[]>;
  
  deleteMany?: Maybe<CandidateScalarWhereInput[]>;
  
  updateMany?: Maybe<CandidateUpdateManyWithWhereNestedInput[]>;
}

export interface CandidateUpdateWithWhereUniqueNestedInput {
  
  where: CandidateWhereUniqueInput;
  
  data: CandidateUpdateDataInput;
}

export interface CandidateUpdateDataInput {
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  emails?: Maybe<CandidateUpdateemailsInput>;
  
  phones?: Maybe<CandidateUpdatephonesInput>;
  
  links?: Maybe<CandidateUpdatelinksInput>;
  
  avatar?: Maybe<FileUpdateOneInput>;
  
  company?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  position?: Maybe<string>;
  
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  
  resumesFile?: Maybe<FileUpdateManyInput>;
  
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
  
  coverLettersFile?: Maybe<FileUpdateManyInput>;
  
  tags?: Maybe<TagUpdateManyInput>;
  
  sources?: Maybe<SourceUpdateManyInput>;
  
  fields?: Maybe<FieldInstanceUpdateManyInput>;
  
  tasks?: Maybe<TaskUpdateManyWithoutCandidateInput>;
  
  applications?: Maybe<ApplicationUpdateManyWithoutCandidateInput>;
  
  comments?: Maybe<CommentUpdateManyInput>;
}

export interface TaskUpdateManyWithoutCandidateInput {
  
  create?: Maybe<TaskCreateWithoutCandidateInput[]>;
  
  delete?: Maybe<TaskWhereUniqueInput[]>;
  
  connect?: Maybe<TaskWhereUniqueInput[]>;
  
  set?: Maybe<TaskWhereUniqueInput[]>;
  
  disconnect?: Maybe<TaskWhereUniqueInput[]>;
  
  update?: Maybe<TaskUpdateWithWhereUniqueWithoutCandidateInput[]>;
  
  upsert?: Maybe<TaskUpsertWithWhereUniqueWithoutCandidateInput[]>;
  
  deleteMany?: Maybe<TaskScalarWhereInput[]>;
  
  updateMany?: Maybe<TaskUpdateManyWithWhereNestedInput[]>;
}

export interface TaskUpdateWithWhereUniqueWithoutCandidateInput {
  
  where: TaskWhereUniqueInput;
  
  data: TaskUpdateWithoutCandidateDataInput;
}

export interface TaskUpdateWithoutCandidateDataInput {
  
  owners?: Maybe<UserUpdateManyWithoutTasksInput>;
  
  title?: Maybe<string>;
  
  description?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
}

export interface UserUpdateManyWithoutTasksInput {
  
  create?: Maybe<UserCreateWithoutTasksInput[]>;
  
  delete?: Maybe<UserWhereUniqueInput[]>;
  
  connect?: Maybe<UserWhereUniqueInput[]>;
  
  set?: Maybe<UserWhereUniqueInput[]>;
  
  disconnect?: Maybe<UserWhereUniqueInput[]>;
  
  update?: Maybe<UserUpdateWithWhereUniqueWithoutTasksInput[]>;
  
  upsert?: Maybe<UserUpsertWithWhereUniqueWithoutTasksInput[]>;
  
  deleteMany?: Maybe<UserScalarWhereInput[]>;
  
  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>;
}

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  
  where: UserWhereUniqueInput;
  
  data: UserUpdateWithoutTasksDataInput;
}

export interface UserUpdateWithoutTasksDataInput {
  
  settings?: Maybe<Json>;
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  email?: Maybe<string>;
  
  username?: Maybe<string>;
  
  lastLogin?: Maybe<DateTime>;
  
  deletedAt?: Maybe<DateTime>;
  
  position?: Maybe<string>;
  
  avatar?: Maybe<FileUpdateOneInput>;
}

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  
  where: UserWhereUniqueInput;
  
  update: UserUpdateWithoutTasksDataInput;
  
  create: UserCreateWithoutTasksInput;
}

export interface TaskUpsertWithWhereUniqueWithoutCandidateInput {
  
  where: TaskWhereUniqueInput;
  
  update: TaskUpdateWithoutCandidateDataInput;
  
  create: TaskCreateWithoutCandidateInput;
}

export interface TaskScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  title?: Maybe<string>;
  
  title_not?: Maybe<string>;
  
  title_in?: Maybe<string[]>;
  
  title_not_in?: Maybe<string[]>;
  
  title_lt?: Maybe<string>;
  
  title_lte?: Maybe<string>;
  
  title_gt?: Maybe<string>;
  
  title_gte?: Maybe<string>;
  
  title_contains?: Maybe<string>;
  
  title_not_contains?: Maybe<string>;
  
  title_starts_with?: Maybe<string>;
  
  title_not_starts_with?: Maybe<string>;
  
  title_ends_with?: Maybe<string>;
  
  title_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
  
  dueAt_not?: Maybe<DateTime>;
  
  dueAt_in?: Maybe<DateTime[]>;
  
  dueAt_not_in?: Maybe<DateTime[]>;
  
  dueAt_lt?: Maybe<DateTime>;
  
  dueAt_lte?: Maybe<DateTime>;
  
  dueAt_gt?: Maybe<DateTime>;
  
  dueAt_gte?: Maybe<DateTime>;
  
  AND?: Maybe<TaskScalarWhereInput[]>;
  
  OR?: Maybe<TaskScalarWhereInput[]>;
  
  NOT?: Maybe<TaskScalarWhereInput[]>;
}

export interface TaskUpdateManyWithWhereNestedInput {
  
  where: TaskScalarWhereInput;
  
  data: TaskUpdateManyDataInput;
}

export interface TaskUpdateManyDataInput {
  
  title?: Maybe<string>;
  
  description?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
}

export interface CommentUpdateManyInput {
  
  create?: Maybe<CommentCreateInput[]>;
  
  update?: Maybe<CommentUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<CommentUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<CommentWhereUniqueInput[]>;
  
  connect?: Maybe<CommentWhereUniqueInput[]>;
  
  set?: Maybe<CommentWhereUniqueInput[]>;
  
  disconnect?: Maybe<CommentWhereUniqueInput[]>;
  
  deleteMany?: Maybe<CommentScalarWhereInput[]>;
  
  updateMany?: Maybe<CommentUpdateManyWithWhereNestedInput[]>;
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  
  where: CommentWhereUniqueInput;
  
  data: CommentUpdateDataInput;
}

export interface CommentUpdateDataInput {
  
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  
  parent?: Maybe<CommentUpdateOneInput>;
  
  content?: Maybe<string>;
}

export interface CommentUpdateOneInput {
  
  create?: Maybe<CommentCreateInput>;
  
  update?: Maybe<CommentUpdateDataInput>;
  
  upsert?: Maybe<CommentUpsertNestedInput>;
  
  delete?: Maybe<boolean>;
  
  disconnect?: Maybe<boolean>;
  
  connect?: Maybe<CommentWhereUniqueInput>;
}

export interface CommentUpsertNestedInput {
  
  update: CommentUpdateDataInput;
  
  create: CommentCreateInput;
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  
  where: CommentWhereUniqueInput;
  
  update: CommentUpdateDataInput;
  
  create: CommentCreateInput;
}

export interface CommentScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  content?: Maybe<string>;
  
  content_not?: Maybe<string>;
  
  content_in?: Maybe<string[]>;
  
  content_not_in?: Maybe<string[]>;
  
  content_lt?: Maybe<string>;
  
  content_lte?: Maybe<string>;
  
  content_gt?: Maybe<string>;
  
  content_gte?: Maybe<string>;
  
  content_contains?: Maybe<string>;
  
  content_not_contains?: Maybe<string>;
  
  content_starts_with?: Maybe<string>;
  
  content_not_starts_with?: Maybe<string>;
  
  content_ends_with?: Maybe<string>;
  
  content_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<CommentScalarWhereInput[]>;
  
  OR?: Maybe<CommentScalarWhereInput[]>;
  
  NOT?: Maybe<CommentScalarWhereInput[]>;
}

export interface CommentUpdateManyWithWhereNestedInput {
  
  where: CommentScalarWhereInput;
  
  data: CommentUpdateManyDataInput;
}

export interface CommentUpdateManyDataInput {
  
  content?: Maybe<string>;
}

export interface CandidateUpsertWithWhereUniqueNestedInput {
  
  where: CandidateWhereUniqueInput;
  
  update: CandidateUpdateDataInput;
  
  create: CandidateCreateInput;
}

export interface CandidateScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  firstName?: Maybe<string>;
  
  firstName_not?: Maybe<string>;
  
  firstName_in?: Maybe<string[]>;
  
  firstName_not_in?: Maybe<string[]>;
  
  firstName_lt?: Maybe<string>;
  
  firstName_lte?: Maybe<string>;
  
  firstName_gt?: Maybe<string>;
  
  firstName_gte?: Maybe<string>;
  
  firstName_contains?: Maybe<string>;
  
  firstName_not_contains?: Maybe<string>;
  
  firstName_starts_with?: Maybe<string>;
  
  firstName_not_starts_with?: Maybe<string>;
  
  firstName_ends_with?: Maybe<string>;
  
  firstName_not_ends_with?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  lastName_not?: Maybe<string>;
  
  lastName_in?: Maybe<string[]>;
  
  lastName_not_in?: Maybe<string[]>;
  
  lastName_lt?: Maybe<string>;
  
  lastName_lte?: Maybe<string>;
  
  lastName_gt?: Maybe<string>;
  
  lastName_gte?: Maybe<string>;
  
  lastName_contains?: Maybe<string>;
  
  lastName_not_contains?: Maybe<string>;
  
  lastName_starts_with?: Maybe<string>;
  
  lastName_not_starts_with?: Maybe<string>;
  
  lastName_ends_with?: Maybe<string>;
  
  lastName_not_ends_with?: Maybe<string>;
  
  company?: Maybe<string>;
  
  company_not?: Maybe<string>;
  
  company_in?: Maybe<string[]>;
  
  company_not_in?: Maybe<string[]>;
  
  company_lt?: Maybe<string>;
  
  company_lte?: Maybe<string>;
  
  company_gt?: Maybe<string>;
  
  company_gte?: Maybe<string>;
  
  company_contains?: Maybe<string>;
  
  company_not_contains?: Maybe<string>;
  
  company_starts_with?: Maybe<string>;
  
  company_not_starts_with?: Maybe<string>;
  
  company_ends_with?: Maybe<string>;
  
  company_not_ends_with?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  headline_not?: Maybe<string>;
  
  headline_in?: Maybe<string[]>;
  
  headline_not_in?: Maybe<string[]>;
  
  headline_lt?: Maybe<string>;
  
  headline_lte?: Maybe<string>;
  
  headline_gt?: Maybe<string>;
  
  headline_gte?: Maybe<string>;
  
  headline_contains?: Maybe<string>;
  
  headline_not_contains?: Maybe<string>;
  
  headline_starts_with?: Maybe<string>;
  
  headline_not_starts_with?: Maybe<string>;
  
  headline_ends_with?: Maybe<string>;
  
  headline_not_ends_with?: Maybe<string>;
  
  position?: Maybe<string>;
  
  position_not?: Maybe<string>;
  
  position_in?: Maybe<string[]>;
  
  position_not_in?: Maybe<string[]>;
  
  position_lt?: Maybe<string>;
  
  position_lte?: Maybe<string>;
  
  position_gt?: Maybe<string>;
  
  position_gte?: Maybe<string>;
  
  position_contains?: Maybe<string>;
  
  position_not_contains?: Maybe<string>;
  
  position_starts_with?: Maybe<string>;
  
  position_not_starts_with?: Maybe<string>;
  
  position_ends_with?: Maybe<string>;
  
  position_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<CandidateScalarWhereInput[]>;
  
  OR?: Maybe<CandidateScalarWhereInput[]>;
  
  NOT?: Maybe<CandidateScalarWhereInput[]>;
}

export interface CandidateUpdateManyWithWhereNestedInput {
  
  where: CandidateScalarWhereInput;
  
  data: CandidateUpdateManyDataInput;
}

export interface CandidateUpdateManyDataInput {
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  emails?: Maybe<CandidateUpdateemailsInput>;
  
  phones?: Maybe<CandidateUpdatephonesInput>;
  
  links?: Maybe<CandidateUpdatelinksInput>;
  
  company?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  position?: Maybe<string>;
  
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
}

export interface WorkflowUpdateManyInput {
  
  create?: Maybe<WorkflowCreateInput[]>;
  
  update?: Maybe<WorkflowUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<WorkflowUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<WorkflowWhereUniqueInput[]>;
  
  connect?: Maybe<WorkflowWhereUniqueInput[]>;
  
  set?: Maybe<WorkflowWhereUniqueInput[]>;
  
  disconnect?: Maybe<WorkflowWhereUniqueInput[]>;
  
  deleteMany?: Maybe<WorkflowScalarWhereInput[]>;
  
  updateMany?: Maybe<WorkflowUpdateManyWithWhereNestedInput[]>;
}

export interface WorkflowUpdateWithWhereUniqueNestedInput {
  
  where: WorkflowWhereUniqueInput;
  
  data: WorkflowUpdateDataInput;
}

export interface WorkflowUpdateDataInput {
  
  jobs?: Maybe<JobUpdateManyWithoutWorkflowInput>;
  
  name?: Maybe<string>;
  
  description?: Maybe<string>;
  
  stages?: Maybe<StageUpdateManyInput>;
  
  disqualifications?: Maybe<DisqualificationUpdateManyInput>;
  
  fields?: Maybe<FieldUpdateManyInput>;
  
  reviews?: Maybe<ReviewUpdateManyInput>;
}

export interface JobUpdateManyWithoutWorkflowInput {
  
  create?: Maybe<JobCreateWithoutWorkflowInput[]>;
  
  delete?: Maybe<JobWhereUniqueInput[]>;
  
  connect?: Maybe<JobWhereUniqueInput[]>;
  
  set?: Maybe<JobWhereUniqueInput[]>;
  
  disconnect?: Maybe<JobWhereUniqueInput[]>;
  
  update?: Maybe<JobUpdateWithWhereUniqueWithoutWorkflowInput[]>;
  
  upsert?: Maybe<JobUpsertWithWhereUniqueWithoutWorkflowInput[]>;
  
  deleteMany?: Maybe<JobScalarWhereInput[]>;
  
  updateMany?: Maybe<JobUpdateManyWithWhereNestedInput[]>;
}

export interface JobUpdateWithWhereUniqueWithoutWorkflowInput {
  
  where: JobWhereUniqueInput;
  
  data: JobUpdateWithoutWorkflowDataInput;
}

export interface JobUpdateWithoutWorkflowDataInput {
  
  workspace?: Maybe<WorkspaceUpdateOneRequiredWithoutJobsInput>;
  
  applications?: Maybe<ApplicationUpdateManyWithoutJobInput>;
  
  comments?: Maybe<CommentUpdateManyInput>;
  
  type?: Maybe<JobType>;
  
  department?: Maybe<string>;
  
  locations?: Maybe<LocationUpdateManyInput>;
  
  name?: Maybe<string>;
  
  excerpt?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  description?: Maybe<string>;
  
  requirements?: Maybe<string>;
}

export interface ApplicationUpdateManyWithoutJobInput {
  
  create?: Maybe<ApplicationCreateWithoutJobInput[]>;
  
  delete?: Maybe<ApplicationWhereUniqueInput[]>;
  
  connect?: Maybe<ApplicationWhereUniqueInput[]>;
  
  set?: Maybe<ApplicationWhereUniqueInput[]>;
  
  disconnect?: Maybe<ApplicationWhereUniqueInput[]>;
  
  update?: Maybe<ApplicationUpdateWithWhereUniqueWithoutJobInput[]>;
  
  upsert?: Maybe<ApplicationUpsertWithWhereUniqueWithoutJobInput[]>;
  
  deleteMany?: Maybe<ApplicationScalarWhereInput[]>;
  
  updateMany?: Maybe<ApplicationUpdateManyWithWhereNestedInput[]>;
}

export interface ApplicationUpdateWithWhereUniqueWithoutJobInput {
  
  where: ApplicationWhereUniqueInput;
  
  data: ApplicationUpdateWithoutJobDataInput;
}

export interface ApplicationUpdateWithoutJobDataInput {
  
  type?: Maybe<ApplicationType>;
  
  disqualification?: Maybe<DisqualificationInstanceUpdateOneInput>;
  
  stage?: Maybe<StageUpdateOneRequiredInput>;
  
  reviews?: Maybe<ReviewInstanceUpdateManyInput>;
  
  candidate?: Maybe<CandidateUpdateOneRequiredWithoutApplicationsInput>;
}

export interface CandidateUpdateOneRequiredWithoutApplicationsInput {
  
  create?: Maybe<CandidateCreateWithoutApplicationsInput>;
  
  update?: Maybe<CandidateUpdateWithoutApplicationsDataInput>;
  
  upsert?: Maybe<CandidateUpsertWithoutApplicationsInput>;
  
  connect?: Maybe<CandidateWhereUniqueInput>;
}

export interface CandidateUpdateWithoutApplicationsDataInput {
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  emails?: Maybe<CandidateUpdateemailsInput>;
  
  phones?: Maybe<CandidateUpdatephonesInput>;
  
  links?: Maybe<CandidateUpdatelinksInput>;
  
  avatar?: Maybe<FileUpdateOneInput>;
  
  company?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  position?: Maybe<string>;
  
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  
  resumesFile?: Maybe<FileUpdateManyInput>;
  
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
  
  coverLettersFile?: Maybe<FileUpdateManyInput>;
  
  tags?: Maybe<TagUpdateManyInput>;
  
  sources?: Maybe<SourceUpdateManyInput>;
  
  fields?: Maybe<FieldInstanceUpdateManyInput>;
  
  tasks?: Maybe<TaskUpdateManyWithoutCandidateInput>;
  
  comments?: Maybe<CommentUpdateManyInput>;
}

export interface CandidateUpsertWithoutApplicationsInput {
  
  update: CandidateUpdateWithoutApplicationsDataInput;
  
  create: CandidateCreateWithoutApplicationsInput;
}

export interface ApplicationUpsertWithWhereUniqueWithoutJobInput {
  
  where: ApplicationWhereUniqueInput;
  
  update: ApplicationUpdateWithoutJobDataInput;
  
  create: ApplicationCreateWithoutJobInput;
}

export interface ApplicationScalarWhereInput {
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  type?: Maybe<ApplicationType>;
  
  type_not?: Maybe<ApplicationType>;
  
  type_in?: Maybe<ApplicationType[]>;
  
  type_not_in?: Maybe<ApplicationType[]>;
  
  AND?: Maybe<ApplicationScalarWhereInput[]>;
  
  OR?: Maybe<ApplicationScalarWhereInput[]>;
  
  NOT?: Maybe<ApplicationScalarWhereInput[]>;
}

export interface ApplicationUpdateManyWithWhereNestedInput {
  
  where: ApplicationScalarWhereInput;
  
  data: ApplicationUpdateManyDataInput;
}

export interface ApplicationUpdateManyDataInput {
  
  type?: Maybe<ApplicationType>;
}

export interface LocationUpdateManyInput {
  
  create?: Maybe<LocationCreateInput[]>;
  
  update?: Maybe<LocationUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<LocationUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<LocationWhereUniqueInput[]>;
  
  connect?: Maybe<LocationWhereUniqueInput[]>;
  
  set?: Maybe<LocationWhereUniqueInput[]>;
  
  disconnect?: Maybe<LocationWhereUniqueInput[]>;
  
  deleteMany?: Maybe<LocationScalarWhereInput[]>;
  
  updateMany?: Maybe<LocationUpdateManyWithWhereNestedInput[]>;
}

export interface LocationUpdateWithWhereUniqueNestedInput {
  
  where: LocationWhereUniqueInput;
  
  data: LocationUpdateDataInput;
}

export interface LocationUpdateDataInput {
  
  country?: Maybe<string>;
  
  region?: Maybe<string>;
  
  city?: Maybe<string>;
  
  zip?: Maybe<string>;
}

export interface LocationUpsertWithWhereUniqueNestedInput {
  
  where: LocationWhereUniqueInput;
  
  update: LocationUpdateDataInput;
  
  create: LocationCreateInput;
}

export interface LocationScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  country?: Maybe<string>;
  
  country_not?: Maybe<string>;
  
  country_in?: Maybe<string[]>;
  
  country_not_in?: Maybe<string[]>;
  
  country_lt?: Maybe<string>;
  
  country_lte?: Maybe<string>;
  
  country_gt?: Maybe<string>;
  
  country_gte?: Maybe<string>;
  
  country_contains?: Maybe<string>;
  
  country_not_contains?: Maybe<string>;
  
  country_starts_with?: Maybe<string>;
  
  country_not_starts_with?: Maybe<string>;
  
  country_ends_with?: Maybe<string>;
  
  country_not_ends_with?: Maybe<string>;
  
  region?: Maybe<string>;
  
  region_not?: Maybe<string>;
  
  region_in?: Maybe<string[]>;
  
  region_not_in?: Maybe<string[]>;
  
  region_lt?: Maybe<string>;
  
  region_lte?: Maybe<string>;
  
  region_gt?: Maybe<string>;
  
  region_gte?: Maybe<string>;
  
  region_contains?: Maybe<string>;
  
  region_not_contains?: Maybe<string>;
  
  region_starts_with?: Maybe<string>;
  
  region_not_starts_with?: Maybe<string>;
  
  region_ends_with?: Maybe<string>;
  
  region_not_ends_with?: Maybe<string>;
  
  city?: Maybe<string>;
  
  city_not?: Maybe<string>;
  
  city_in?: Maybe<string[]>;
  
  city_not_in?: Maybe<string[]>;
  
  city_lt?: Maybe<string>;
  
  city_lte?: Maybe<string>;
  
  city_gt?: Maybe<string>;
  
  city_gte?: Maybe<string>;
  
  city_contains?: Maybe<string>;
  
  city_not_contains?: Maybe<string>;
  
  city_starts_with?: Maybe<string>;
  
  city_not_starts_with?: Maybe<string>;
  
  city_ends_with?: Maybe<string>;
  
  city_not_ends_with?: Maybe<string>;
  
  zip?: Maybe<string>;
  
  zip_not?: Maybe<string>;
  
  zip_in?: Maybe<string[]>;
  
  zip_not_in?: Maybe<string[]>;
  
  zip_lt?: Maybe<string>;
  
  zip_lte?: Maybe<string>;
  
  zip_gt?: Maybe<string>;
  
  zip_gte?: Maybe<string>;
  
  zip_contains?: Maybe<string>;
  
  zip_not_contains?: Maybe<string>;
  
  zip_starts_with?: Maybe<string>;
  
  zip_not_starts_with?: Maybe<string>;
  
  zip_ends_with?: Maybe<string>;
  
  zip_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<LocationScalarWhereInput[]>;
  
  OR?: Maybe<LocationScalarWhereInput[]>;
  
  NOT?: Maybe<LocationScalarWhereInput[]>;
}

export interface LocationUpdateManyWithWhereNestedInput {
  
  where: LocationScalarWhereInput;
  
  data: LocationUpdateManyDataInput;
}

export interface LocationUpdateManyDataInput {
  
  country?: Maybe<string>;
  
  region?: Maybe<string>;
  
  city?: Maybe<string>;
  
  zip?: Maybe<string>;
}

export interface JobUpsertWithWhereUniqueWithoutWorkflowInput {
  
  where: JobWhereUniqueInput;
  
  update: JobUpdateWithoutWorkflowDataInput;
  
  create: JobCreateWithoutWorkflowInput;
}

export interface JobScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  type?: Maybe<JobType>;
  
  type_not?: Maybe<JobType>;
  
  type_in?: Maybe<JobType[]>;
  
  type_not_in?: Maybe<JobType[]>;
  
  department?: Maybe<string>;
  
  department_not?: Maybe<string>;
  
  department_in?: Maybe<string[]>;
  
  department_not_in?: Maybe<string[]>;
  
  department_lt?: Maybe<string>;
  
  department_lte?: Maybe<string>;
  
  department_gt?: Maybe<string>;
  
  department_gte?: Maybe<string>;
  
  department_contains?: Maybe<string>;
  
  department_not_contains?: Maybe<string>;
  
  department_starts_with?: Maybe<string>;
  
  department_not_starts_with?: Maybe<string>;
  
  department_ends_with?: Maybe<string>;
  
  department_not_ends_with?: Maybe<string>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  excerpt?: Maybe<string>;
  
  excerpt_not?: Maybe<string>;
  
  excerpt_in?: Maybe<string[]>;
  
  excerpt_not_in?: Maybe<string[]>;
  
  excerpt_lt?: Maybe<string>;
  
  excerpt_lte?: Maybe<string>;
  
  excerpt_gt?: Maybe<string>;
  
  excerpt_gte?: Maybe<string>;
  
  excerpt_contains?: Maybe<string>;
  
  excerpt_not_contains?: Maybe<string>;
  
  excerpt_starts_with?: Maybe<string>;
  
  excerpt_not_starts_with?: Maybe<string>;
  
  excerpt_ends_with?: Maybe<string>;
  
  excerpt_not_ends_with?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  companyDescription_not?: Maybe<string>;
  
  companyDescription_in?: Maybe<string[]>;
  
  companyDescription_not_in?: Maybe<string[]>;
  
  companyDescription_lt?: Maybe<string>;
  
  companyDescription_lte?: Maybe<string>;
  
  companyDescription_gt?: Maybe<string>;
  
  companyDescription_gte?: Maybe<string>;
  
  companyDescription_contains?: Maybe<string>;
  
  companyDescription_not_contains?: Maybe<string>;
  
  companyDescription_starts_with?: Maybe<string>;
  
  companyDescription_not_starts_with?: Maybe<string>;
  
  companyDescription_ends_with?: Maybe<string>;
  
  companyDescription_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  requirements?: Maybe<string>;
  
  requirements_not?: Maybe<string>;
  
  requirements_in?: Maybe<string[]>;
  
  requirements_not_in?: Maybe<string[]>;
  
  requirements_lt?: Maybe<string>;
  
  requirements_lte?: Maybe<string>;
  
  requirements_gt?: Maybe<string>;
  
  requirements_gte?: Maybe<string>;
  
  requirements_contains?: Maybe<string>;
  
  requirements_not_contains?: Maybe<string>;
  
  requirements_starts_with?: Maybe<string>;
  
  requirements_not_starts_with?: Maybe<string>;
  
  requirements_ends_with?: Maybe<string>;
  
  requirements_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<JobScalarWhereInput[]>;
  
  OR?: Maybe<JobScalarWhereInput[]>;
  
  NOT?: Maybe<JobScalarWhereInput[]>;
}

export interface JobUpdateManyWithWhereNestedInput {
  
  where: JobScalarWhereInput;
  
  data: JobUpdateManyDataInput;
}

export interface JobUpdateManyDataInput {
  
  type?: Maybe<JobType>;
  
  department?: Maybe<string>;
  
  name?: Maybe<string>;
  
  excerpt?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  description?: Maybe<string>;
  
  requirements?: Maybe<string>;
}

export interface StageUpdateManyInput {
  
  create?: Maybe<StageCreateInput[]>;
  
  update?: Maybe<StageUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<StageUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<StageWhereUniqueInput[]>;
  
  connect?: Maybe<StageWhereUniqueInput[]>;
  
  set?: Maybe<StageWhereUniqueInput[]>;
  
  disconnect?: Maybe<StageWhereUniqueInput[]>;
  
  deleteMany?: Maybe<StageScalarWhereInput[]>;
  
  updateMany?: Maybe<StageUpdateManyWithWhereNestedInput[]>;
}

export interface StageUpdateWithWhereUniqueNestedInput {
  
  where: StageWhereUniqueInput;
  
  data: StageUpdateDataInput;
}

export interface StageUpsertWithWhereUniqueNestedInput {
  
  where: StageWhereUniqueInput;
  
  update: StageUpdateDataInput;
  
  create: StageCreateInput;
}

export interface StageScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  type?: Maybe<StageType>;
  
  type_not?: Maybe<StageType>;
  
  type_in?: Maybe<StageType[]>;
  
  type_not_in?: Maybe<StageType[]>;
  
  AND?: Maybe<StageScalarWhereInput[]>;
  
  OR?: Maybe<StageScalarWhereInput[]>;
  
  NOT?: Maybe<StageScalarWhereInput[]>;
}

export interface StageUpdateManyWithWhereNestedInput {
  
  where: StageScalarWhereInput;
  
  data: StageUpdateManyDataInput;
}

export interface StageUpdateManyDataInput {
  
  name?: Maybe<string>;
  
  description?: Maybe<string>;
  
  type?: Maybe<StageType>;
}

export interface DisqualificationUpdateManyInput {
  
  create?: Maybe<DisqualificationCreateInput[]>;
  
  update?: Maybe<DisqualificationUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<DisqualificationUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<DisqualificationWhereUniqueInput[]>;
  
  connect?: Maybe<DisqualificationWhereUniqueInput[]>;
  
  set?: Maybe<DisqualificationWhereUniqueInput[]>;
  
  disconnect?: Maybe<DisqualificationWhereUniqueInput[]>;
  
  deleteMany?: Maybe<DisqualificationScalarWhereInput[]>;
  
  updateMany?: Maybe<DisqualificationUpdateManyWithWhereNestedInput[]>;
}

export interface DisqualificationUpdateWithWhereUniqueNestedInput {
  
  where: DisqualificationWhereUniqueInput;
  
  data: DisqualificationUpdateDataInput;
}

export interface DisqualificationUpsertWithWhereUniqueNestedInput {
  
  where: DisqualificationWhereUniqueInput;
  
  update: DisqualificationUpdateDataInput;
  
  create: DisqualificationCreateInput;
}

export interface DisqualificationScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<DisqualificationScalarWhereInput[]>;
  
  OR?: Maybe<DisqualificationScalarWhereInput[]>;
  
  NOT?: Maybe<DisqualificationScalarWhereInput[]>;
}

export interface DisqualificationUpdateManyWithWhereNestedInput {
  
  where: DisqualificationScalarWhereInput;
  
  data: DisqualificationUpdateManyDataInput;
}

export interface DisqualificationUpdateManyDataInput {
  
  name?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface ReviewUpdateManyInput {
  
  create?: Maybe<ReviewCreateInput[]>;
  
  update?: Maybe<ReviewUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<ReviewUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<ReviewWhereUniqueInput[]>;
  
  connect?: Maybe<ReviewWhereUniqueInput[]>;
  
  set?: Maybe<ReviewWhereUniqueInput[]>;
  
  disconnect?: Maybe<ReviewWhereUniqueInput[]>;
  
  deleteMany?: Maybe<ReviewScalarWhereInput[]>;
  
  updateMany?: Maybe<ReviewUpdateManyWithWhereNestedInput[]>;
}

export interface ReviewUpdateWithWhereUniqueNestedInput {
  
  where: ReviewWhereUniqueInput;
  
  data: ReviewUpdateDataInput;
}

export interface ReviewUpsertWithWhereUniqueNestedInput {
  
  where: ReviewWhereUniqueInput;
  
  update: ReviewUpdateDataInput;
  
  create: ReviewCreateInput;
}

export interface ReviewScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<ReviewScalarWhereInput[]>;
  
  OR?: Maybe<ReviewScalarWhereInput[]>;
  
  NOT?: Maybe<ReviewScalarWhereInput[]>;
}

export interface ReviewUpdateManyWithWhereNestedInput {
  
  where: ReviewScalarWhereInput;
  
  data: ReviewUpdateManyDataInput;
}

export interface ReviewUpdateManyDataInput {
  
  name?: Maybe<string>;
}

export interface WorkflowUpsertWithWhereUniqueNestedInput {
  
  where: WorkflowWhereUniqueInput;
  
  update: WorkflowUpdateDataInput;
  
  create: WorkflowCreateInput;
}

export interface WorkflowScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  name?: Maybe<string>;
  
  name_not?: Maybe<string>;
  
  name_in?: Maybe<string[]>;
  
  name_not_in?: Maybe<string[]>;
  
  name_lt?: Maybe<string>;
  
  name_lte?: Maybe<string>;
  
  name_gt?: Maybe<string>;
  
  name_gte?: Maybe<string>;
  
  name_contains?: Maybe<string>;
  
  name_not_contains?: Maybe<string>;
  
  name_starts_with?: Maybe<string>;
  
  name_not_starts_with?: Maybe<string>;
  
  name_ends_with?: Maybe<string>;
  
  name_not_ends_with?: Maybe<string>;
  
  description?: Maybe<string>;
  
  description_not?: Maybe<string>;
  
  description_in?: Maybe<string[]>;
  
  description_not_in?: Maybe<string[]>;
  
  description_lt?: Maybe<string>;
  
  description_lte?: Maybe<string>;
  
  description_gt?: Maybe<string>;
  
  description_gte?: Maybe<string>;
  
  description_contains?: Maybe<string>;
  
  description_not_contains?: Maybe<string>;
  
  description_starts_with?: Maybe<string>;
  
  description_not_starts_with?: Maybe<string>;
  
  description_ends_with?: Maybe<string>;
  
  description_not_ends_with?: Maybe<string>;
  
  AND?: Maybe<WorkflowScalarWhereInput[]>;
  
  OR?: Maybe<WorkflowScalarWhereInput[]>;
  
  NOT?: Maybe<WorkflowScalarWhereInput[]>;
}

export interface WorkflowUpdateManyWithWhereNestedInput {
  
  where: WorkflowScalarWhereInput;
  
  data: WorkflowUpdateManyDataInput;
}

export interface WorkflowUpdateManyDataInput {
  
  name?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface InviteUpdateManyInput {
  
  create?: Maybe<InviteCreateInput[]>;
  
  update?: Maybe<InviteUpdateWithWhereUniqueNestedInput[]>;
  
  upsert?: Maybe<InviteUpsertWithWhereUniqueNestedInput[]>;
  
  delete?: Maybe<InviteWhereUniqueInput[]>;
  
  connect?: Maybe<InviteWhereUniqueInput[]>;
  
  set?: Maybe<InviteWhereUniqueInput[]>;
  
  disconnect?: Maybe<InviteWhereUniqueInput[]>;
  
  deleteMany?: Maybe<InviteScalarWhereInput[]>;
  
  updateMany?: Maybe<InviteUpdateManyWithWhereNestedInput[]>;
}

export interface InviteUpdateWithWhereUniqueNestedInput {
  
  where: InviteWhereUniqueInput;
  
  data: InviteUpdateDataInput;
}

export interface InviteUpdateDataInput {
  
  email?: Maybe<string>;
  
  expireAt?: Maybe<DateTime>;
  
  invitedBy?: Maybe<UserUpdateOneRequiredInput>;
}

export interface InviteUpsertWithWhereUniqueNestedInput {
  
  where: InviteWhereUniqueInput;
  
  update: InviteUpdateDataInput;
  
  create: InviteCreateInput;
}

export interface InviteScalarWhereInput {
  
  id?: Maybe<string>;
  
  id_not?: Maybe<string>;
  
  id_in?: Maybe<string[]>;
  
  id_not_in?: Maybe<string[]>;
  
  id_lt?: Maybe<string>;
  
  id_lte?: Maybe<string>;
  
  id_gt?: Maybe<string>;
  
  id_gte?: Maybe<string>;
  
  id_contains?: Maybe<string>;
  
  id_not_contains?: Maybe<string>;
  
  id_starts_with?: Maybe<string>;
  
  id_not_starts_with?: Maybe<string>;
  
  id_ends_with?: Maybe<string>;
  
  id_not_ends_with?: Maybe<string>;
  
  createdAt?: Maybe<DateTime>;
  
  createdAt_not?: Maybe<DateTime>;
  
  createdAt_in?: Maybe<DateTime[]>;
  
  createdAt_not_in?: Maybe<DateTime[]>;
  
  createdAt_lt?: Maybe<DateTime>;
  
  createdAt_lte?: Maybe<DateTime>;
  
  createdAt_gt?: Maybe<DateTime>;
  
  createdAt_gte?: Maybe<DateTime>;
  
  updatedAt?: Maybe<DateTime>;
  
  updatedAt_not?: Maybe<DateTime>;
  
  updatedAt_in?: Maybe<DateTime[]>;
  
  updatedAt_not_in?: Maybe<DateTime[]>;
  
  updatedAt_lt?: Maybe<DateTime>;
  
  updatedAt_lte?: Maybe<DateTime>;
  
  updatedAt_gt?: Maybe<DateTime>;
  
  updatedAt_gte?: Maybe<DateTime>;
  
  email?: Maybe<string>;
  
  email_not?: Maybe<string>;
  
  email_in?: Maybe<string[]>;
  
  email_not_in?: Maybe<string[]>;
  
  email_lt?: Maybe<string>;
  
  email_lte?: Maybe<string>;
  
  email_gt?: Maybe<string>;
  
  email_gte?: Maybe<string>;
  
  email_contains?: Maybe<string>;
  
  email_not_contains?: Maybe<string>;
  
  email_starts_with?: Maybe<string>;
  
  email_not_starts_with?: Maybe<string>;
  
  email_ends_with?: Maybe<string>;
  
  email_not_ends_with?: Maybe<string>;
  
  expireAt?: Maybe<DateTime>;
  
  expireAt_not?: Maybe<DateTime>;
  
  expireAt_in?: Maybe<DateTime[]>;
  
  expireAt_not_in?: Maybe<DateTime[]>;
  
  expireAt_lt?: Maybe<DateTime>;
  
  expireAt_lte?: Maybe<DateTime>;
  
  expireAt_gt?: Maybe<DateTime>;
  
  expireAt_gte?: Maybe<DateTime>;
  
  AND?: Maybe<InviteScalarWhereInput[]>;
  
  OR?: Maybe<InviteScalarWhereInput[]>;
  
  NOT?: Maybe<InviteScalarWhereInput[]>;
}

export interface InviteUpdateManyWithWhereNestedInput {
  
  where: InviteScalarWhereInput;
  
  data: InviteUpdateManyDataInput;
}

export interface InviteUpdateManyDataInput {
  
  email?: Maybe<string>;
  
  expireAt?: Maybe<DateTime>;
}

export interface WorkspaceUpsertWithoutJobsInput {
  
  update: WorkspaceUpdateWithoutJobsDataInput;
  
  create: WorkspaceCreateWithoutJobsInput;
}

export interface WorkflowUpdateOneRequiredWithoutJobsInput {
  
  create?: Maybe<WorkflowCreateWithoutJobsInput>;
  
  update?: Maybe<WorkflowUpdateWithoutJobsDataInput>;
  
  upsert?: Maybe<WorkflowUpsertWithoutJobsInput>;
  
  connect?: Maybe<WorkflowWhereUniqueInput>;
}

export interface WorkflowUpdateWithoutJobsDataInput {
  
  name?: Maybe<string>;
  
  description?: Maybe<string>;
  
  stages?: Maybe<StageUpdateManyInput>;
  
  disqualifications?: Maybe<DisqualificationUpdateManyInput>;
  
  fields?: Maybe<FieldUpdateManyInput>;
  
  reviews?: Maybe<ReviewUpdateManyInput>;
}

export interface WorkflowUpsertWithoutJobsInput {
  
  update: WorkflowUpdateWithoutJobsDataInput;
  
  create: WorkflowCreateWithoutJobsInput;
}

export interface JobUpsertWithoutApplicationsInput {
  
  update: JobUpdateWithoutApplicationsDataInput;
  
  create: JobCreateWithoutApplicationsInput;
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  
  where: ApplicationWhereUniqueInput;
  
  update: ApplicationUpdateWithoutCandidateDataInput;
  
  create: ApplicationCreateWithoutCandidateInput;
}

export interface CandidateUpsertWithoutTasksInput {
  
  update: CandidateUpdateWithoutTasksDataInput;
  
  create: CandidateCreateWithoutTasksInput;
}

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  
  where: TaskWhereUniqueInput;
  
  update: TaskUpdateWithoutOwnersDataInput;
  
  create: TaskCreateWithoutOwnersInput;
}

export interface UserUpsertNestedInput {
  
  update: UserUpdateDataInput;
  
  create: UserCreateInput;
}

export interface DisqualificationInstanceUpsertNestedInput {
  
  update: DisqualificationInstanceUpdateDataInput;
  
  create: DisqualificationInstanceCreateInput;
}

export interface ApplicationUpdateManyMutationInput {
  
  type?: Maybe<ApplicationType>;
}

export interface CandidateUpdateInput {
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  emails?: Maybe<CandidateUpdateemailsInput>;
  
  phones?: Maybe<CandidateUpdatephonesInput>;
  
  links?: Maybe<CandidateUpdatelinksInput>;
  
  avatar?: Maybe<FileUpdateOneInput>;
  
  company?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  position?: Maybe<string>;
  
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  
  resumesFile?: Maybe<FileUpdateManyInput>;
  
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
  
  coverLettersFile?: Maybe<FileUpdateManyInput>;
  
  tags?: Maybe<TagUpdateManyInput>;
  
  sources?: Maybe<SourceUpdateManyInput>;
  
  fields?: Maybe<FieldInstanceUpdateManyInput>;
  
  tasks?: Maybe<TaskUpdateManyWithoutCandidateInput>;
  
  applications?: Maybe<ApplicationUpdateManyWithoutCandidateInput>;
  
  comments?: Maybe<CommentUpdateManyInput>;
}

export interface CandidateUpdateManyMutationInput {
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  emails?: Maybe<CandidateUpdateemailsInput>;
  
  phones?: Maybe<CandidateUpdatephonesInput>;
  
  links?: Maybe<CandidateUpdatelinksInput>;
  
  company?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  position?: Maybe<string>;
  
  resumesString?: Maybe<CandidateUpdateresumesStringInput>;
  
  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>;
}

export interface JobCreateInput {
  
  workspace: WorkspaceCreateOneWithoutJobsInput;
  
  applications?: Maybe<ApplicationCreateManyWithoutJobInput>;
  
  workflow: WorkflowCreateOneWithoutJobsInput;
  
  comments?: Maybe<CommentCreateManyInput>;
  
  type: JobType;
  
  department?: Maybe<string>;
  
  locations?: Maybe<LocationCreateManyInput>;
  
  name: string;
  
  excerpt?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  description?: Maybe<string>;
  
  requirements?: Maybe<string>;
}

export interface JobUpdateInput {
  
  workspace?: Maybe<WorkspaceUpdateOneRequiredWithoutJobsInput>;
  
  applications?: Maybe<ApplicationUpdateManyWithoutJobInput>;
  
  workflow?: Maybe<WorkflowUpdateOneRequiredWithoutJobsInput>;
  
  comments?: Maybe<CommentUpdateManyInput>;
  
  type?: Maybe<JobType>;
  
  department?: Maybe<string>;
  
  locations?: Maybe<LocationUpdateManyInput>;
  
  name?: Maybe<string>;
  
  excerpt?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  description?: Maybe<string>;
  
  requirements?: Maybe<string>;
}

export interface JobUpdateManyMutationInput {
  
  type?: Maybe<JobType>;
  
  department?: Maybe<string>;
  
  name?: Maybe<string>;
  
  excerpt?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  description?: Maybe<string>;
  
  requirements?: Maybe<string>;
}

export interface SourceUpdateInput {
  
  label?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface SourceUpdateManyMutationInput {
  
  label?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface TagUpdateInput {
  
  label?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface TagUpdateManyMutationInput {
  
  label?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface TaskCreateInput {
  
  owners?: Maybe<UserCreateManyWithoutTasksInput>;
  
  candidate?: Maybe<CandidateCreateOneWithoutTasksInput>;
  
  title?: Maybe<string>;
  
  description?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
}

export interface TaskUpdateInput {
  
  owners?: Maybe<UserUpdateManyWithoutTasksInput>;
  
  candidate?: Maybe<CandidateUpdateOneWithoutTasksInput>;
  
  title?: Maybe<string>;
  
  description?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
}

export interface TaskUpdateManyMutationInput {
  
  title?: Maybe<string>;
  
  description?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
}

export interface WorkflowUpdateInput {
  
  jobs?: Maybe<JobUpdateManyWithoutWorkflowInput>;
  
  name?: Maybe<string>;
  
  description?: Maybe<string>;
  
  stages?: Maybe<StageUpdateManyInput>;
  
  disqualifications?: Maybe<DisqualificationUpdateManyInput>;
  
  fields?: Maybe<FieldUpdateManyInput>;
  
  reviews?: Maybe<ReviewUpdateManyInput>;
}

export interface WorkflowUpdateManyMutationInput {
  
  name?: Maybe<string>;
  
  description?: Maybe<string>;
}

export interface WorkspaceCreateInput {
  
  name: string;
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  email: string;
  
  username: string;
  
  password: string;
}

export interface SignupInput {
  
  password: string;
  
  username: string;
  
  inviteId: string;
}

export interface LoginInput {
  
  email: string;
  
  password: string;
}

export interface RefreshInput {
  
  token: string;
}

export interface WhereUniqueInput {
  
  id: string;
}

export interface Connect {
  
  connect?: Maybe<WhereUniqueInput>;
}

export interface ConnectMany {
  
  connect?: Maybe<WhereUniqueInput[]>;
}

export interface ConnectDisconnect {
  
  connect?: Maybe<WhereUniqueInput>;
  
  disconnect?: Maybe<WhereUniqueInput>;
}

export interface ConnectDisconnectMany {
  
  connect?: Maybe<WhereUniqueInput[]>;
  
  disconnect?: Maybe<WhereUniqueInput[]>;
}

  export enum ApplicationType {
    Qualified = "QUALIFIED",
    Disqualified = "DISQUALIFIED",
  }

  export enum FieldType {
    Int = "INT",
    Float = "FLOAT",
    Text = "TEXT",
    Paragraph = "PARAGRAPH",
    Boolean = "BOOLEAN",
    Datetime = "DATETIME",
  }

  export enum StageType {
    New = "NEW",
    Pipeline = "PIPELINE",
    Final = "FINAL",
  }

  export enum JobType {
    Draft = "DRAFT",
    Published = "PUBLISHED",
    Archived = "ARCHIVED",
  }

  export enum TaskOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    DueAtAsc = "dueAt_ASC",
    DueAtDesc = "dueAt_DESC",
  }

  export enum UserOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    SettingsAsc = "settings_ASC",
    SettingsDesc = "settings_DESC",
    FirstNameAsc = "firstName_ASC",
    FirstNameDesc = "firstName_DESC",
    LastNameAsc = "lastName_ASC",
    LastNameDesc = "lastName_DESC",
    EmailAsc = "email_ASC",
    EmailDesc = "email_DESC",
    UsernameAsc = "username_ASC",
    UsernameDesc = "username_DESC",
    LastLoginAsc = "lastLogin_ASC",
    LastLoginDesc = "lastLogin_DESC",
    DeletedAtAsc = "deletedAt_ASC",
    DeletedAtDesc = "deletedAt_DESC",
    PositionAsc = "position_ASC",
    PositionDesc = "position_DESC",
  }

  export enum FileOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    SizeAsc = "size_ASC",
    SizeDesc = "size_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    UrlAsc = "url_ASC",
    UrlDesc = "url_DESC",
  }

  export enum TagOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    LabelAsc = "label_ASC",
    LabelDesc = "label_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
  }

  export enum SourceOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    LabelAsc = "label_ASC",
    LabelDesc = "label_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
  }

  export enum FieldInstanceOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    ValueAsc = "value_ASC",
    ValueDesc = "value_DESC",
  }

  export enum ApplicationOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
  }

  export enum CommentOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    ContentAsc = "content_ASC",
    ContentDesc = "content_DESC",
  }

  export enum ReviewInstanceOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    RatingAsc = "rating_ASC",
    RatingDesc = "rating_DESC",
    ContentAsc = "content_ASC",
    ContentDesc = "content_DESC",
  }

  export enum FieldOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
    LabelAsc = "label_ASC",
    LabelDesc = "label_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
  }

  export enum JobOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
    DepartmentAsc = "department_ASC",
    DepartmentDesc = "department_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    ExcerptAsc = "excerpt_ASC",
    ExcerptDesc = "excerpt_DESC",
    CompanyDescriptionAsc = "companyDescription_ASC",
    CompanyDescriptionDesc = "companyDescription_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    RequirementsAsc = "requirements_ASC",
    RequirementsDesc = "requirements_DESC",
  }

  export enum CandidateOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    FirstNameAsc = "firstName_ASC",
    FirstNameDesc = "firstName_DESC",
    LastNameAsc = "lastName_ASC",
    LastNameDesc = "lastName_DESC",
    CompanyAsc = "company_ASC",
    CompanyDesc = "company_DESC",
    HeadlineAsc = "headline_ASC",
    HeadlineDesc = "headline_DESC",
    PositionAsc = "position_ASC",
    PositionDesc = "position_DESC",
  }

  export enum WorkflowOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
  }

  export enum StageOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    TypeAsc = "type_ASC",
    TypeDesc = "type_DESC",
  }

  export enum DisqualificationOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
  }

  export enum ReviewOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
  }

  export enum InviteOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    EmailAsc = "email_ASC",
    EmailDesc = "email_DESC",
    ExpireAtAsc = "expireAt_ASC",
    ExpireAtDesc = "expireAt_DESC",
  }

  export enum LocationOrderByInput {
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    CountryAsc = "country_ASC",
    CountryDesc = "country_DESC",
    RegionAsc = "region_ASC",
    RegionDesc = "region_DESC",
    CityAsc = "city_ASC",
    CityDesc = "city_DESC",
    ZipAsc = "zip_ASC",
    ZipDesc = "zip_DESC",
  }


export type DateTime = any;


export type Json = any;


export type Long = any;



// ====================================================
// Scalars
// ====================================================







// ====================================================
// Types
// ====================================================



export interface Query {
  
  application?: Maybe<Application>;
  
  applications: (Maybe<Application>)[];
  
  applicationsConnection: ApplicationConnection;
  
  candidate?: Maybe<Candidate>;
  
  candidates: (Maybe<Candidate>)[];
  
  candidatesConnection: CandidateConnection;
  
  job?: Maybe<Job>;
  
  jobs: (Maybe<Job>)[];
  
  jobsConnection: JobConnection;
  
  source?: Maybe<Source>;
  
  sources: (Maybe<Source>)[];
  
  sourcesConnection: SourceConnection;
  
  tag?: Maybe<Tag>;
  
  tags: (Maybe<Tag>)[];
  
  tagsConnection: TagConnection;
  
  task?: Maybe<Task>;
  
  tasks: (Maybe<Task>)[];
  
  tasksConnection: TaskConnection;
  
  user?: Maybe<User>;
  
  users: (Maybe<User>)[];
  
  usersConnection: UserConnection;
  
  workflow?: Maybe<Workflow>;
  
  workflows: (Maybe<Workflow>)[];
  
  workflowsConnection: WorkflowConnection;
}


export interface Application {
  
  createdAt: DateTime;
  
  id: string;
  
  updatedAt: DateTime;
  
  type: ApplicationType;
  
  disqualification?: Maybe<DisqualificationInstance>;
  
  stage: Stage;
  
  reviews?: Maybe<ReviewInstance[]>;
  
  job: Job;
  
  candidate: Candidate;
}


export interface DisqualificationInstance {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  prototype: Disqualification;
  
  createdBy: User;
  
  content?: Maybe<string>;
}


export interface Disqualification {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  name: string;
  
  description?: Maybe<string>;
}


export interface User {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  settings?: Maybe<Json>;
  
  tasks?: Maybe<Task[]>;
  
  firstName: string;
  
  lastName: string;
  
  email: string;
  
  username: string;
  
  lastLogin?: Maybe<DateTime>;
  
  deletedAt?: Maybe<DateTime>;
  
  position?: Maybe<string>;
  
  avatar?: Maybe<File>;
}


export interface Task {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  owners?: Maybe<User[]>;
  
  candidate?: Maybe<Candidate>;
  
  title?: Maybe<string>;
  
  description?: Maybe<string>;
  
  dueAt?: Maybe<DateTime>;
}


export interface Candidate {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  firstName?: Maybe<string>;
  
  lastName?: Maybe<string>;
  
  emails: string[];
  
  phones: string[];
  
  links: string[];
  
  avatar?: Maybe<File>;
  
  company?: Maybe<string>;
  
  headline?: Maybe<string>;
  
  position?: Maybe<string>;
  
  resumesString: string[];
  
  resumesFile?: Maybe<File[]>;
  
  coverLettersString: string[];
  
  coverLettersFile?: Maybe<File[]>;
  
  tags?: Maybe<Tag[]>;
  
  sources?: Maybe<Source[]>;
  
  fields?: Maybe<FieldInstance[]>;
  
  tasks?: Maybe<Task[]>;
  
  applications?: Maybe<Application[]>;
  
  comments?: Maybe<Comment[]>;
}


export interface File {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  size: number;
  
  type: string;
  
  name: string;
  
  url: string;
}


export interface Tag {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  label: string;
  
  description?: Maybe<string>;
}


export interface Source {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  label: string;
  
  description?: Maybe<string>;
}


export interface FieldInstance {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  prototype: Field;
  
  value?: Maybe<string>;
}


export interface Field {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  type: FieldType;
  
  label: string;
  
  description?: Maybe<string>;
}


export interface Comment {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  createdBy: User;
  
  parent?: Maybe<Comment>;
  
  content: string;
}


export interface Stage {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  name: string;
  
  description?: Maybe<string>;
  
  type: StageType;
}


export interface ReviewInstance {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  prototype?: Maybe<Review>;
  
  fields?: Maybe<FieldInstance[]>;
  
  createdBy: User;
  
  rating?: Maybe<number>;
  
  content?: Maybe<string>;
}


export interface Review {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  name: string;
  
  fields?: Maybe<Field[]>;
}


export interface Job {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  workspace: Workspace;
  
  applications?: Maybe<Application[]>;
  
  workflow: Workflow;
  
  comments?: Maybe<Comment[]>;
  
  type: JobType;
  
  department?: Maybe<string>;
  
  locations?: Maybe<Location[]>;
  
  name: string;
  
  excerpt?: Maybe<string>;
  
  companyDescription?: Maybe<string>;
  
  description?: Maybe<string>;
  
  requirements?: Maybe<string>;
}


export interface Workspace {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  users?: Maybe<User[]>;
  
  jobs?: Maybe<Job[]>;
  
  candidates?: Maybe<Candidate[]>;
  
  settings?: Maybe<Json>;
  
  workflows?: Maybe<Workflow[]>;
  
  invites?: Maybe<Invite[]>;
  
  name: string;
}


export interface Workflow {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  jobs?: Maybe<Job[]>;
  
  name: string;
  
  description?: Maybe<string>;
  
  stages?: Maybe<Stage[]>;
  
  disqualifications?: Maybe<Disqualification[]>;
  
  fields?: Maybe<Field[]>;
  
  reviews?: Maybe<Review[]>;
}


export interface Invite {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  email: string;
  
  expireAt: DateTime;
  
  invitedBy: User;
}


export interface Location {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  country: string;
  
  region?: Maybe<string>;
  
  city: string;
  
  zip?: Maybe<string>;
}


export interface ApplicationConnection {
  
  pageInfo: PageInfo;
  
  edges: (Maybe<ApplicationEdge>)[];
  
  aggregate: AggregateApplication;
}


export interface PageInfo {
  
  hasNextPage: boolean;
  
  hasPreviousPage: boolean;
  
  startCursor?: Maybe<string>;
  
  endCursor?: Maybe<string>;
}


export interface ApplicationEdge {
  
  node: Application;
  
  cursor: string;
}


export interface AggregateApplication {
  
  count: number;
}


export interface CandidateConnection {
  
  pageInfo: PageInfo;
  
  edges: (Maybe<CandidateEdge>)[];
  
  aggregate: AggregateCandidate;
}


export interface CandidateEdge {
  
  node: Candidate;
  
  cursor: string;
}


export interface AggregateCandidate {
  
  count: number;
}


export interface JobConnection {
  
  pageInfo: PageInfo;
  
  edges: (Maybe<JobEdge>)[];
  
  aggregate: AggregateJob;
}


export interface JobEdge {
  
  node: Job;
  
  cursor: string;
}


export interface AggregateJob {
  
  count: number;
}


export interface SourceConnection {
  
  pageInfo: PageInfo;
  
  edges: (Maybe<SourceEdge>)[];
  
  aggregate: AggregateSource;
}


export interface SourceEdge {
  
  node: Source;
  
  cursor: string;
}


export interface AggregateSource {
  
  count: number;
}


export interface TagConnection {
  
  pageInfo: PageInfo;
  
  edges: (Maybe<TagEdge>)[];
  
  aggregate: AggregateTag;
}


export interface TagEdge {
  
  node: Tag;
  
  cursor: string;
}


export interface AggregateTag {
  
  count: number;
}


export interface TaskConnection {
  
  pageInfo: PageInfo;
  
  edges: (Maybe<TaskEdge>)[];
  
  aggregate: AggregateTask;
}


export interface TaskEdge {
  
  node: Task;
  
  cursor: string;
}


export interface AggregateTask {
  
  count: number;
}


export interface UserConnection {
  
  pageInfo: PageInfo;
  
  edges: (Maybe<UserEdge>)[];
  
  aggregate: AggregateUser;
}


export interface UserEdge {
  
  node: User;
  
  cursor: string;
}


export interface AggregateUser {
  
  count: number;
}


export interface WorkflowConnection {
  
  pageInfo: PageInfo;
  
  edges: (Maybe<WorkflowEdge>)[];
  
  aggregate: AggregateWorkflow;
}


export interface WorkflowEdge {
  
  node: Workflow;
  
  cursor: string;
}


export interface AggregateWorkflow {
  
  count: number;
}


export interface Mutation {
  
  createApplication: Application;
  
  updateApplication?: Maybe<Application>;
  
  updateManyApplications: BatchPayload;
  
  upsertApplication: Application;
  
  deleteApplication?: Maybe<Application>;
  
  deleteManyApplications: BatchPayload;
  
  createCandidate: Candidate;
  
  updateCandidate?: Maybe<Candidate>;
  
  updateManyCandidates: BatchPayload;
  
  upsertCandidate: Candidate;
  
  deleteCandidate?: Maybe<Candidate>;
  
  deleteManyCandidates: BatchPayload;
  
  createJob: Job;
  
  updateJob?: Maybe<Job>;
  
  updateManyJobs: BatchPayload;
  
  upsertJob: Job;
  
  deleteJob?: Maybe<Job>;
  
  deleteManyJobs: BatchPayload;
  
  createSource: Source;
  
  updateSource?: Maybe<Source>;
  
  updateManySources: BatchPayload;
  
  upsertSource: Source;
  
  deleteSource?: Maybe<Source>;
  
  deleteManySources: BatchPayload;
  
  createTag: Tag;
  
  updateTag?: Maybe<Tag>;
  
  updateManyTags: BatchPayload;
  
  upsertTag: Tag;
  
  deleteTag?: Maybe<Tag>;
  
  deleteManyTags: BatchPayload;
  
  createTask: Task;
  
  updateTask?: Maybe<Task>;
  
  updateManyTasks: BatchPayload;
  
  upsertTask: Task;
  
  deleteTask?: Maybe<Task>;
  
  deleteManyTasks: BatchPayload;
  
  createWorkflow: Workflow;
  
  updateWorkflow?: Maybe<Workflow>;
  
  updateManyWorkflows: BatchPayload;
  
  upsertWorkflow: Workflow;
  
  deleteWorkflow?: Maybe<Workflow>;
  
  deleteManyWorkflows: BatchPayload;
}


export interface BatchPayload {
  
  count: Long;
}


export interface AuthPayload {
  
  token: string;
  
  refresh: string;
}


export interface AccessPayload {
  
  token: string;
}



// ====================================================
// Arguments
// ====================================================

export interface ApplicationQueryArgs {
  
  where: ApplicationWhereUniqueInput;
}
export interface ApplicationsQueryArgs {
  
  where?: Maybe<ApplicationWhereInput>;
  
  orderBy?: Maybe<ApplicationOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface ApplicationsConnectionQueryArgs {
  
  where?: Maybe<ApplicationWhereInput>;
  
  orderBy?: Maybe<ApplicationOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface CandidateQueryArgs {
  
  where: CandidateWhereUniqueInput;
}
export interface CandidatesQueryArgs {
  
  where?: Maybe<CandidateWhereInput>;
  
  orderBy?: Maybe<CandidateOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface CandidatesConnectionQueryArgs {
  
  where?: Maybe<CandidateWhereInput>;
  
  orderBy?: Maybe<CandidateOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface JobQueryArgs {
  
  where: JobWhereUniqueInput;
}
export interface JobsQueryArgs {
  
  where?: Maybe<JobWhereInput>;
  
  orderBy?: Maybe<JobOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface JobsConnectionQueryArgs {
  
  where?: Maybe<JobWhereInput>;
  
  orderBy?: Maybe<JobOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface SourceQueryArgs {
  
  where: SourceWhereUniqueInput;
}
export interface SourcesQueryArgs {
  
  where?: Maybe<SourceWhereInput>;
  
  orderBy?: Maybe<SourceOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface SourcesConnectionQueryArgs {
  
  where?: Maybe<SourceWhereInput>;
  
  orderBy?: Maybe<SourceOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface TagQueryArgs {
  
  where: TagWhereUniqueInput;
}
export interface TagsQueryArgs {
  
  where?: Maybe<TagWhereInput>;
  
  orderBy?: Maybe<TagOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface TagsConnectionQueryArgs {
  
  where?: Maybe<TagWhereInput>;
  
  orderBy?: Maybe<TagOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface TaskQueryArgs {
  
  where: TaskWhereUniqueInput;
}
export interface TasksQueryArgs {
  
  where?: Maybe<TaskWhereInput>;
  
  orderBy?: Maybe<TaskOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface TasksConnectionQueryArgs {
  
  where?: Maybe<TaskWhereInput>;
  
  orderBy?: Maybe<TaskOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface UserQueryArgs {
  
  where: UserWhereUniqueInput;
}
export interface UsersQueryArgs {
  
  where?: Maybe<UserWhereInput>;
  
  orderBy?: Maybe<UserOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface UsersConnectionQueryArgs {
  
  where?: Maybe<UserWhereInput>;
  
  orderBy?: Maybe<UserOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface WorkflowQueryArgs {
  
  where: WorkflowWhereUniqueInput;
}
export interface WorkflowsQueryArgs {
  
  where?: Maybe<WorkflowWhereInput>;
  
  orderBy?: Maybe<WorkflowOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface WorkflowsConnectionQueryArgs {
  
  where?: Maybe<WorkflowWhereInput>;
  
  orderBy?: Maybe<WorkflowOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface ReviewsApplicationArgs {
  
  where?: Maybe<ReviewInstanceWhereInput>;
  
  orderBy?: Maybe<ReviewInstanceOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface TasksUserArgs {
  
  where?: Maybe<TaskWhereInput>;
  
  orderBy?: Maybe<TaskOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface OwnersTaskArgs {
  
  where?: Maybe<UserWhereInput>;
  
  orderBy?: Maybe<UserOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface ResumesFileCandidateArgs {
  
  where?: Maybe<FileWhereInput>;
  
  orderBy?: Maybe<FileOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface CoverLettersFileCandidateArgs {
  
  where?: Maybe<FileWhereInput>;
  
  orderBy?: Maybe<FileOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface TagsCandidateArgs {
  
  where?: Maybe<TagWhereInput>;
  
  orderBy?: Maybe<TagOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface SourcesCandidateArgs {
  
  where?: Maybe<SourceWhereInput>;
  
  orderBy?: Maybe<SourceOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface FieldsCandidateArgs {
  
  where?: Maybe<FieldInstanceWhereInput>;
  
  orderBy?: Maybe<FieldInstanceOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface TasksCandidateArgs {
  
  where?: Maybe<TaskWhereInput>;
  
  orderBy?: Maybe<TaskOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface ApplicationsCandidateArgs {
  
  where?: Maybe<ApplicationWhereInput>;
  
  orderBy?: Maybe<ApplicationOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface CommentsCandidateArgs {
  
  where?: Maybe<CommentWhereInput>;
  
  orderBy?: Maybe<CommentOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface FieldsReviewInstanceArgs {
  
  where?: Maybe<FieldInstanceWhereInput>;
  
  orderBy?: Maybe<FieldInstanceOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface FieldsReviewArgs {
  
  where?: Maybe<FieldWhereInput>;
  
  orderBy?: Maybe<FieldOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface ApplicationsJobArgs {
  
  where?: Maybe<ApplicationWhereInput>;
  
  orderBy?: Maybe<ApplicationOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface CommentsJobArgs {
  
  where?: Maybe<CommentWhereInput>;
  
  orderBy?: Maybe<CommentOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface LocationsJobArgs {
  
  where?: Maybe<LocationWhereInput>;
  
  orderBy?: Maybe<LocationOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface UsersWorkspaceArgs {
  
  where?: Maybe<UserWhereInput>;
  
  orderBy?: Maybe<UserOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface JobsWorkspaceArgs {
  
  where?: Maybe<JobWhereInput>;
  
  orderBy?: Maybe<JobOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface CandidatesWorkspaceArgs {
  
  where?: Maybe<CandidateWhereInput>;
  
  orderBy?: Maybe<CandidateOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface WorkflowsWorkspaceArgs {
  
  where?: Maybe<WorkflowWhereInput>;
  
  orderBy?: Maybe<WorkflowOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface InvitesWorkspaceArgs {
  
  where?: Maybe<InviteWhereInput>;
  
  orderBy?: Maybe<InviteOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface JobsWorkflowArgs {
  
  where?: Maybe<JobWhereInput>;
  
  orderBy?: Maybe<JobOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface StagesWorkflowArgs {
  
  where?: Maybe<StageWhereInput>;
  
  orderBy?: Maybe<StageOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface DisqualificationsWorkflowArgs {
  
  where?: Maybe<DisqualificationWhereInput>;
  
  orderBy?: Maybe<DisqualificationOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface FieldsWorkflowArgs {
  
  where?: Maybe<FieldWhereInput>;
  
  orderBy?: Maybe<FieldOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface ReviewsWorkflowArgs {
  
  where?: Maybe<ReviewWhereInput>;
  
  orderBy?: Maybe<ReviewOrderByInput>;
  
  skip?: Maybe<number>;
  
  after?: Maybe<string>;
  
  before?: Maybe<string>;
  
  first?: Maybe<number>;
  
  last?: Maybe<number>;
}
export interface CreateApplicationMutationArgs {
  
  data: ApplicationCreateInput;
}
export interface UpdateApplicationMutationArgs {
  
  data: ApplicationUpdateInput;
  
  where: ApplicationWhereUniqueInput;
}
export interface UpdateManyApplicationsMutationArgs {
  
  data: ApplicationUpdateManyMutationInput;
  
  where?: Maybe<ApplicationWhereInput>;
}
export interface UpsertApplicationMutationArgs {
  
  where: ApplicationWhereUniqueInput;
  
  create: ApplicationCreateInput;
  
  update: ApplicationUpdateInput;
}
export interface DeleteApplicationMutationArgs {
  
  where: ApplicationWhereUniqueInput;
}
export interface DeleteManyApplicationsMutationArgs {
  
  where?: Maybe<ApplicationWhereInput>;
}
export interface CreateCandidateMutationArgs {
  
  data: CandidateCreateInput;
}
export interface UpdateCandidateMutationArgs {
  
  data: CandidateUpdateInput;
  
  where: CandidateWhereUniqueInput;
}
export interface UpdateManyCandidatesMutationArgs {
  
  data: CandidateUpdateManyMutationInput;
  
  where?: Maybe<CandidateWhereInput>;
}
export interface UpsertCandidateMutationArgs {
  
  where: CandidateWhereUniqueInput;
  
  create: CandidateCreateInput;
  
  update: CandidateUpdateInput;
}
export interface DeleteCandidateMutationArgs {
  
  where: CandidateWhereUniqueInput;
}
export interface DeleteManyCandidatesMutationArgs {
  
  where?: Maybe<CandidateWhereInput>;
}
export interface CreateJobMutationArgs {
  
  data: JobCreateInput;
}
export interface UpdateJobMutationArgs {
  
  data: JobUpdateInput;
  
  where: JobWhereUniqueInput;
}
export interface UpdateManyJobsMutationArgs {
  
  data: JobUpdateManyMutationInput;
  
  where?: Maybe<JobWhereInput>;
}
export interface UpsertJobMutationArgs {
  
  where: JobWhereUniqueInput;
  
  create: JobCreateInput;
  
  update: JobUpdateInput;
}
export interface DeleteJobMutationArgs {
  
  where: JobWhereUniqueInput;
}
export interface DeleteManyJobsMutationArgs {
  
  where?: Maybe<JobWhereInput>;
}
export interface CreateSourceMutationArgs {
  
  data: SourceCreateInput;
}
export interface UpdateSourceMutationArgs {
  
  data: SourceUpdateInput;
  
  where: SourceWhereUniqueInput;
}
export interface UpdateManySourcesMutationArgs {
  
  data: SourceUpdateManyMutationInput;
  
  where?: Maybe<SourceWhereInput>;
}
export interface UpsertSourceMutationArgs {
  
  where: SourceWhereUniqueInput;
  
  create: SourceCreateInput;
  
  update: SourceUpdateInput;
}
export interface DeleteSourceMutationArgs {
  
  where: SourceWhereUniqueInput;
}
export interface DeleteManySourcesMutationArgs {
  
  where?: Maybe<SourceWhereInput>;
}
export interface CreateTagMutationArgs {
  
  data: TagCreateInput;
}
export interface UpdateTagMutationArgs {
  
  data: TagUpdateInput;
  
  where: TagWhereUniqueInput;
}
export interface UpdateManyTagsMutationArgs {
  
  data: TagUpdateManyMutationInput;
  
  where?: Maybe<TagWhereInput>;
}
export interface UpsertTagMutationArgs {
  
  where: TagWhereUniqueInput;
  
  create: TagCreateInput;
  
  update: TagUpdateInput;
}
export interface DeleteTagMutationArgs {
  
  where: TagWhereUniqueInput;
}
export interface DeleteManyTagsMutationArgs {
  
  where?: Maybe<TagWhereInput>;
}
export interface CreateTaskMutationArgs {
  
  data: TaskCreateInput;
}
export interface UpdateTaskMutationArgs {
  
  data: TaskUpdateInput;
  
  where: TaskWhereUniqueInput;
}
export interface UpdateManyTasksMutationArgs {
  
  data: TaskUpdateManyMutationInput;
  
  where?: Maybe<TaskWhereInput>;
}
export interface UpsertTaskMutationArgs {
  
  where: TaskWhereUniqueInput;
  
  create: TaskCreateInput;
  
  update: TaskUpdateInput;
}
export interface DeleteTaskMutationArgs {
  
  where: TaskWhereUniqueInput;
}
export interface DeleteManyTasksMutationArgs {
  
  where?: Maybe<TaskWhereInput>;
}
export interface CreateWorkflowMutationArgs {
  
  data: WorkflowCreateInput;
}
export interface UpdateWorkflowMutationArgs {
  
  data: WorkflowUpdateInput;
  
  where: WorkflowWhereUniqueInput;
}
export interface UpdateManyWorkflowsMutationArgs {
  
  data: WorkflowUpdateManyMutationInput;
  
  where?: Maybe<WorkflowWhereInput>;
}
export interface UpsertWorkflowMutationArgs {
  
  where: WorkflowWhereUniqueInput;
  
  create: WorkflowCreateInput;
  
  update: WorkflowUpdateInput;
}
export interface DeleteWorkflowMutationArgs {
  
  where: WorkflowWhereUniqueInput;
}
export interface DeleteManyWorkflowsMutationArgs {
  
  where?: Maybe<WorkflowWhereInput>;
}


import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';





export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<Result, Parent = {}, TContext = {}, Args = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;


export namespace QueryResolvers {
  export interface Resolvers<TContext = {}, TypeParent = {}> {
    
    application?: ApplicationResolver<Maybe<Application>, TypeParent, TContext>;
    
    applications?: ApplicationsResolver<(Maybe<Application>)[], TypeParent, TContext>;
    
    applicationsConnection?: ApplicationsConnectionResolver<ApplicationConnection, TypeParent, TContext>;
    
    candidate?: CandidateResolver<Maybe<Candidate>, TypeParent, TContext>;
    
    candidates?: CandidatesResolver<(Maybe<Candidate>)[], TypeParent, TContext>;
    
    candidatesConnection?: CandidatesConnectionResolver<CandidateConnection, TypeParent, TContext>;
    
    job?: JobResolver<Maybe<Job>, TypeParent, TContext>;
    
    jobs?: JobsResolver<(Maybe<Job>)[], TypeParent, TContext>;
    
    jobsConnection?: JobsConnectionResolver<JobConnection, TypeParent, TContext>;
    
    source?: SourceResolver<Maybe<Source>, TypeParent, TContext>;
    
    sources?: SourcesResolver<(Maybe<Source>)[], TypeParent, TContext>;
    
    sourcesConnection?: SourcesConnectionResolver<SourceConnection, TypeParent, TContext>;
    
    tag?: TagResolver<Maybe<Tag>, TypeParent, TContext>;
    
    tags?: TagsResolver<(Maybe<Tag>)[], TypeParent, TContext>;
    
    tagsConnection?: TagsConnectionResolver<TagConnection, TypeParent, TContext>;
    
    task?: TaskResolver<Maybe<Task>, TypeParent, TContext>;
    
    tasks?: TasksResolver<(Maybe<Task>)[], TypeParent, TContext>;
    
    tasksConnection?: TasksConnectionResolver<TaskConnection, TypeParent, TContext>;
    
    user?: UserResolver<Maybe<User>, TypeParent, TContext>;
    
    users?: UsersResolver<(Maybe<User>)[], TypeParent, TContext>;
    
    usersConnection?: UsersConnectionResolver<UserConnection, TypeParent, TContext>;
    
    workflow?: WorkflowResolver<Maybe<Workflow>, TypeParent, TContext>;
    
    workflows?: WorkflowsResolver<(Maybe<Workflow>)[], TypeParent, TContext>;
    
    workflowsConnection?: WorkflowsConnectionResolver<WorkflowConnection, TypeParent, TContext>;
  }


  export type ApplicationResolver<R = Maybe<Application>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, ApplicationArgs>;
  export interface ApplicationArgs {
    
    where: ApplicationWhereUniqueInput;
  }


  export type ApplicationsResolver<R = (Maybe<Application>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, ApplicationsArgs>;
  export interface ApplicationsArgs {
    
    where?: Maybe<ApplicationWhereInput>;
    
    orderBy?: Maybe<ApplicationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type ApplicationsConnectionResolver<R = ApplicationConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, ApplicationsConnectionArgs>;
  export interface ApplicationsConnectionArgs {
    
    where?: Maybe<ApplicationWhereInput>;
    
    orderBy?: Maybe<ApplicationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidateResolver<R = Maybe<Candidate>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, CandidateArgs>;
  export interface CandidateArgs {
    
    where: CandidateWhereUniqueInput;
  }


  export type CandidatesResolver<R = (Maybe<Candidate>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, CandidatesArgs>;
  export interface CandidatesArgs {
    
    where?: Maybe<CandidateWhereInput>;
    
    orderBy?: Maybe<CandidateOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidatesConnectionResolver<R = CandidateConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, CandidatesConnectionArgs>;
  export interface CandidatesConnectionArgs {
    
    where?: Maybe<CandidateWhereInput>;
    
    orderBy?: Maybe<CandidateOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type JobResolver<R = Maybe<Job>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, JobArgs>;
  export interface JobArgs {
    
    where: JobWhereUniqueInput;
  }


  export type JobsResolver<R = (Maybe<Job>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, JobsArgs>;
  export interface JobsArgs {
    
    where?: Maybe<JobWhereInput>;
    
    orderBy?: Maybe<JobOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type JobsConnectionResolver<R = JobConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, JobsConnectionArgs>;
  export interface JobsConnectionArgs {
    
    where?: Maybe<JobWhereInput>;
    
    orderBy?: Maybe<JobOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type SourceResolver<R = Maybe<Source>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, SourceArgs>;
  export interface SourceArgs {
    
    where: SourceWhereUniqueInput;
  }


  export type SourcesResolver<R = (Maybe<Source>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, SourcesArgs>;
  export interface SourcesArgs {
    
    where?: Maybe<SourceWhereInput>;
    
    orderBy?: Maybe<SourceOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type SourcesConnectionResolver<R = SourceConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, SourcesConnectionArgs>;
  export interface SourcesConnectionArgs {
    
    where?: Maybe<SourceWhereInput>;
    
    orderBy?: Maybe<SourceOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type TagResolver<R = Maybe<Tag>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, TagArgs>;
  export interface TagArgs {
    
    where: TagWhereUniqueInput;
  }


  export type TagsResolver<R = (Maybe<Tag>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, TagsArgs>;
  export interface TagsArgs {
    
    where?: Maybe<TagWhereInput>;
    
    orderBy?: Maybe<TagOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type TagsConnectionResolver<R = TagConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, TagsConnectionArgs>;
  export interface TagsConnectionArgs {
    
    where?: Maybe<TagWhereInput>;
    
    orderBy?: Maybe<TagOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type TaskResolver<R = Maybe<Task>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, TaskArgs>;
  export interface TaskArgs {
    
    where: TaskWhereUniqueInput;
  }


  export type TasksResolver<R = (Maybe<Task>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, TasksArgs>;
  export interface TasksArgs {
    
    where?: Maybe<TaskWhereInput>;
    
    orderBy?: Maybe<TaskOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type TasksConnectionResolver<R = TaskConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, TasksConnectionArgs>;
  export interface TasksConnectionArgs {
    
    where?: Maybe<TaskWhereInput>;
    
    orderBy?: Maybe<TaskOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type UserResolver<R = Maybe<User>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UserArgs>;
  export interface UserArgs {
    
    where: UserWhereUniqueInput;
  }


  export type UsersResolver<R = (Maybe<User>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UsersArgs>;
  export interface UsersArgs {
    
    where?: Maybe<UserWhereInput>;
    
    orderBy?: Maybe<UserOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type UsersConnectionResolver<R = UserConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UsersConnectionArgs>;
  export interface UsersConnectionArgs {
    
    where?: Maybe<UserWhereInput>;
    
    orderBy?: Maybe<UserOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type WorkflowResolver<R = Maybe<Workflow>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, WorkflowArgs>;
  export interface WorkflowArgs {
    
    where: WorkflowWhereUniqueInput;
  }


  export type WorkflowsResolver<R = (Maybe<Workflow>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, WorkflowsArgs>;
  export interface WorkflowsArgs {
    
    where?: Maybe<WorkflowWhereInput>;
    
    orderBy?: Maybe<WorkflowOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type WorkflowsConnectionResolver<R = WorkflowConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, WorkflowsConnectionArgs>;
  export interface WorkflowsConnectionArgs {
    
    where?: Maybe<WorkflowWhereInput>;
    
    orderBy?: Maybe<WorkflowOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


}

export namespace ApplicationResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Application> {
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    type?: TypeResolver<ApplicationType, TypeParent, TContext>;
    
    disqualification?: DisqualificationResolver<Maybe<DisqualificationInstance>, TypeParent, TContext>;
    
    stage?: StageResolver<Stage, TypeParent, TContext>;
    
    reviews?: ReviewsResolver<Maybe<ReviewInstance[]>, TypeParent, TContext>;
    
    job?: JobResolver<Job, TypeParent, TContext>;
    
    candidate?: CandidateResolver<Candidate, TypeParent, TContext>;
  }


  export type CreatedAtResolver<R = DateTime, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type IdResolver<R = string, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TypeResolver<R = ApplicationType, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DisqualificationResolver<R = Maybe<DisqualificationInstance>, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type StageResolver<R = Stage, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ReviewsResolver<R = Maybe<ReviewInstance[]>, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext, ReviewsArgs>;
  export interface ReviewsArgs {
    
    where?: Maybe<ReviewInstanceWhereInput>;
    
    orderBy?: Maybe<ReviewInstanceOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type JobResolver<R = Job, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateResolver<R = Candidate, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace DisqualificationInstanceResolvers {
  export interface Resolvers<TContext = {}, TypeParent = DisqualificationInstance> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    prototype?: PrototypeResolver<Disqualification, TypeParent, TContext>;
    
    createdBy?: CreatedByResolver<User, TypeParent, TContext>;
    
    content?: ContentResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type PrototypeResolver<R = Disqualification, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedByResolver<R = User, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ContentResolver<R = Maybe<string>, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace DisqualificationResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Disqualification> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    name?: NameResolver<string, TypeParent, TContext>;
    
    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Disqualification, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Disqualification, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Disqualification, TContext = {}> = Resolver<R, Parent, TContext>;
  export type NameResolver<R = string, Parent = Disqualification, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Disqualification, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace UserResolvers {
  export interface Resolvers<TContext = {}, TypeParent = User> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    settings?: SettingsResolver<Maybe<Json>, TypeParent, TContext>;
    
    tasks?: TasksResolver<Maybe<Task[]>, TypeParent, TContext>;
    
    firstName?: FirstNameResolver<string, TypeParent, TContext>;
    
    lastName?: LastNameResolver<string, TypeParent, TContext>;
    
    email?: EmailResolver<string, TypeParent, TContext>;
    
    username?: UsernameResolver<string, TypeParent, TContext>;
    
    lastLogin?: LastLoginResolver<Maybe<DateTime>, TypeParent, TContext>;
    
    deletedAt?: DeletedAtResolver<Maybe<DateTime>, TypeParent, TContext>;
    
    position?: PositionResolver<Maybe<string>, TypeParent, TContext>;
    
    avatar?: AvatarResolver<Maybe<File>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type SettingsResolver<R = Maybe<Json>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TasksResolver<R = Maybe<Task[]>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext, TasksArgs>;
  export interface TasksArgs {
    
    where?: Maybe<TaskWhereInput>;
    
    orderBy?: Maybe<TaskOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type FirstNameResolver<R = string, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LastNameResolver<R = string, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EmailResolver<R = string, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UsernameResolver<R = string, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LastLoginResolver<R = Maybe<DateTime>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DeletedAtResolver<R = Maybe<DateTime>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type PositionResolver<R = Maybe<string>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AvatarResolver<R = Maybe<File>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace TaskResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Task> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    owners?: OwnersResolver<Maybe<User[]>, TypeParent, TContext>;
    
    candidate?: CandidateResolver<Maybe<Candidate>, TypeParent, TContext>;
    
    title?: TitleResolver<Maybe<string>, TypeParent, TContext>;
    
    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;
    
    dueAt?: DueAtResolver<Maybe<DateTime>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type OwnersResolver<R = Maybe<User[]>, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext, OwnersArgs>;
  export interface OwnersArgs {
    
    where?: Maybe<UserWhereInput>;
    
    orderBy?: Maybe<UserOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidateResolver<R = Maybe<Candidate>, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TitleResolver<R = Maybe<string>, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DueAtResolver<R = Maybe<DateTime>, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace CandidateResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Candidate> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    firstName?: FirstNameResolver<Maybe<string>, TypeParent, TContext>;
    
    lastName?: LastNameResolver<Maybe<string>, TypeParent, TContext>;
    
    emails?: EmailsResolver<string[], TypeParent, TContext>;
    
    phones?: PhonesResolver<string[], TypeParent, TContext>;
    
    links?: LinksResolver<string[], TypeParent, TContext>;
    
    avatar?: AvatarResolver<Maybe<File>, TypeParent, TContext>;
    
    company?: CompanyResolver<Maybe<string>, TypeParent, TContext>;
    
    headline?: HeadlineResolver<Maybe<string>, TypeParent, TContext>;
    
    position?: PositionResolver<Maybe<string>, TypeParent, TContext>;
    
    resumesString?: ResumesStringResolver<string[], TypeParent, TContext>;
    
    resumesFile?: ResumesFileResolver<Maybe<File[]>, TypeParent, TContext>;
    
    coverLettersString?: CoverLettersStringResolver<string[], TypeParent, TContext>;
    
    coverLettersFile?: CoverLettersFileResolver<Maybe<File[]>, TypeParent, TContext>;
    
    tags?: TagsResolver<Maybe<Tag[]>, TypeParent, TContext>;
    
    sources?: SourcesResolver<Maybe<Source[]>, TypeParent, TContext>;
    
    fields?: FieldsResolver<Maybe<FieldInstance[]>, TypeParent, TContext>;
    
    tasks?: TasksResolver<Maybe<Task[]>, TypeParent, TContext>;
    
    applications?: ApplicationsResolver<Maybe<Application[]>, TypeParent, TContext>;
    
    comments?: CommentsResolver<Maybe<Comment[]>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FirstNameResolver<R = Maybe<string>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LastNameResolver<R = Maybe<string>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EmailsResolver<R = string[], Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type PhonesResolver<R = string[], Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LinksResolver<R = string[], Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AvatarResolver<R = Maybe<File>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CompanyResolver<R = Maybe<string>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type HeadlineResolver<R = Maybe<string>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type PositionResolver<R = Maybe<string>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ResumesStringResolver<R = string[], Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ResumesFileResolver<R = Maybe<File[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, ResumesFileArgs>;
  export interface ResumesFileArgs {
    
    where?: Maybe<FileWhereInput>;
    
    orderBy?: Maybe<FileOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CoverLettersStringResolver<R = string[], Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CoverLettersFileResolver<R = Maybe<File[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, CoverLettersFileArgs>;
  export interface CoverLettersFileArgs {
    
    where?: Maybe<FileWhereInput>;
    
    orderBy?: Maybe<FileOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type TagsResolver<R = Maybe<Tag[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, TagsArgs>;
  export interface TagsArgs {
    
    where?: Maybe<TagWhereInput>;
    
    orderBy?: Maybe<TagOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type SourcesResolver<R = Maybe<Source[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, SourcesArgs>;
  export interface SourcesArgs {
    
    where?: Maybe<SourceWhereInput>;
    
    orderBy?: Maybe<SourceOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type FieldsResolver<R = Maybe<FieldInstance[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, FieldsArgs>;
  export interface FieldsArgs {
    
    where?: Maybe<FieldInstanceWhereInput>;
    
    orderBy?: Maybe<FieldInstanceOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type TasksResolver<R = Maybe<Task[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, TasksArgs>;
  export interface TasksArgs {
    
    where?: Maybe<TaskWhereInput>;
    
    orderBy?: Maybe<TaskOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type ApplicationsResolver<R = Maybe<Application[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, ApplicationsArgs>;
  export interface ApplicationsArgs {
    
    where?: Maybe<ApplicationWhereInput>;
    
    orderBy?: Maybe<ApplicationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CommentsResolver<R = Maybe<Comment[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, CommentsArgs>;
  export interface CommentsArgs {
    
    where?: Maybe<CommentWhereInput>;
    
    orderBy?: Maybe<CommentOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


}

export namespace FileResolvers {
  export interface Resolvers<TContext = {}, TypeParent = File> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    size?: SizeResolver<number, TypeParent, TContext>;
    
    type?: TypeResolver<string, TypeParent, TContext>;
    
    name?: NameResolver<string, TypeParent, TContext>;
    
    url?: UrlResolver<string, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type SizeResolver<R = number, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TypeResolver<R = string, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type NameResolver<R = string, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UrlResolver<R = string, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace TagResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Tag> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    label?: LabelResolver<string, TypeParent, TContext>;
    
    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Tag, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Tag, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Tag, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LabelResolver<R = string, Parent = Tag, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Tag, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace SourceResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Source> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    label?: LabelResolver<string, TypeParent, TContext>;
    
    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Source, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Source, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Source, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LabelResolver<R = string, Parent = Source, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Source, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace FieldInstanceResolvers {
  export interface Resolvers<TContext = {}, TypeParent = FieldInstance> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    prototype?: PrototypeResolver<Field, TypeParent, TContext>;
    
    value?: ValueResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = FieldInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = FieldInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = FieldInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type PrototypeResolver<R = Field, Parent = FieldInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ValueResolver<R = Maybe<string>, Parent = FieldInstance, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace FieldResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Field> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    type?: TypeResolver<FieldType, TypeParent, TContext>;
    
    label?: LabelResolver<string, TypeParent, TContext>;
    
    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TypeResolver<R = FieldType, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LabelResolver<R = string, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace CommentResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Comment> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    createdBy?: CreatedByResolver<User, TypeParent, TContext>;
    
    parent?: ParentResolver<Maybe<Comment>, TypeParent, TContext>;
    
    content?: ContentResolver<string, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedByResolver<R = User, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ParentResolver<R = Maybe<Comment>, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ContentResolver<R = string, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace StageResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Stage> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    name?: NameResolver<string, TypeParent, TContext>;
    
    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;
    
    type?: TypeResolver<StageType, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
  export type NameResolver<R = string, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TypeResolver<R = StageType, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace ReviewInstanceResolvers {
  export interface Resolvers<TContext = {}, TypeParent = ReviewInstance> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    prototype?: PrototypeResolver<Maybe<Review>, TypeParent, TContext>;
    
    fields?: FieldsResolver<Maybe<FieldInstance[]>, TypeParent, TContext>;
    
    createdBy?: CreatedByResolver<User, TypeParent, TContext>;
    
    rating?: RatingResolver<Maybe<number>, TypeParent, TContext>;
    
    content?: ContentResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = ReviewInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = ReviewInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = ReviewInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type PrototypeResolver<R = Maybe<Review>, Parent = ReviewInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldsResolver<R = Maybe<FieldInstance[]>, Parent = ReviewInstance, TContext = {}> = Resolver<R, Parent, TContext, FieldsArgs>;
  export interface FieldsArgs {
    
    where?: Maybe<FieldInstanceWhereInput>;
    
    orderBy?: Maybe<FieldInstanceOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CreatedByResolver<R = User, Parent = ReviewInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type RatingResolver<R = Maybe<number>, Parent = ReviewInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ContentResolver<R = Maybe<string>, Parent = ReviewInstance, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace ReviewResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Review> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    name?: NameResolver<string, TypeParent, TContext>;
    
    fields?: FieldsResolver<Maybe<Field[]>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Review, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Review, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Review, TContext = {}> = Resolver<R, Parent, TContext>;
  export type NameResolver<R = string, Parent = Review, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldsResolver<R = Maybe<Field[]>, Parent = Review, TContext = {}> = Resolver<R, Parent, TContext, FieldsArgs>;
  export interface FieldsArgs {
    
    where?: Maybe<FieldWhereInput>;
    
    orderBy?: Maybe<FieldOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


}

export namespace JobResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Job> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    workspace?: WorkspaceResolver<Workspace, TypeParent, TContext>;
    
    applications?: ApplicationsResolver<Maybe<Application[]>, TypeParent, TContext>;
    
    workflow?: WorkflowResolver<Workflow, TypeParent, TContext>;
    
    comments?: CommentsResolver<Maybe<Comment[]>, TypeParent, TContext>;
    
    type?: TypeResolver<JobType, TypeParent, TContext>;
    
    department?: DepartmentResolver<Maybe<string>, TypeParent, TContext>;
    
    locations?: LocationsResolver<Maybe<Location[]>, TypeParent, TContext>;
    
    name?: NameResolver<string, TypeParent, TContext>;
    
    excerpt?: ExcerptResolver<Maybe<string>, TypeParent, TContext>;
    
    companyDescription?: CompanyDescriptionResolver<Maybe<string>, TypeParent, TContext>;
    
    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;
    
    requirements?: RequirementsResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkspaceResolver<R = Workspace, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationsResolver<R = Maybe<Application[]>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext, ApplicationsArgs>;
  export interface ApplicationsArgs {
    
    where?: Maybe<ApplicationWhereInput>;
    
    orderBy?: Maybe<ApplicationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type WorkflowResolver<R = Workflow, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CommentsResolver<R = Maybe<Comment[]>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext, CommentsArgs>;
  export interface CommentsArgs {
    
    where?: Maybe<CommentWhereInput>;
    
    orderBy?: Maybe<CommentOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type TypeResolver<R = JobType, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DepartmentResolver<R = Maybe<string>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LocationsResolver<R = Maybe<Location[]>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext, LocationsArgs>;
  export interface LocationsArgs {
    
    where?: Maybe<LocationWhereInput>;
    
    orderBy?: Maybe<LocationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type NameResolver<R = string, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ExcerptResolver<R = Maybe<string>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CompanyDescriptionResolver<R = Maybe<string>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type RequirementsResolver<R = Maybe<string>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace WorkspaceResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Workspace> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    users?: UsersResolver<Maybe<User[]>, TypeParent, TContext>;
    
    jobs?: JobsResolver<Maybe<Job[]>, TypeParent, TContext>;
    
    candidates?: CandidatesResolver<Maybe<Candidate[]>, TypeParent, TContext>;
    
    settings?: SettingsResolver<Maybe<Json>, TypeParent, TContext>;
    
    workflows?: WorkflowsResolver<Maybe<Workflow[]>, TypeParent, TContext>;
    
    invites?: InvitesResolver<Maybe<Invite[]>, TypeParent, TContext>;
    
    name?: NameResolver<string, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UsersResolver<R = Maybe<User[]>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext, UsersArgs>;
  export interface UsersArgs {
    
    where?: Maybe<UserWhereInput>;
    
    orderBy?: Maybe<UserOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type JobsResolver<R = Maybe<Job[]>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext, JobsArgs>;
  export interface JobsArgs {
    
    where?: Maybe<JobWhereInput>;
    
    orderBy?: Maybe<JobOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidatesResolver<R = Maybe<Candidate[]>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext, CandidatesArgs>;
  export interface CandidatesArgs {
    
    where?: Maybe<CandidateWhereInput>;
    
    orderBy?: Maybe<CandidateOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type SettingsResolver<R = Maybe<Json>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkflowsResolver<R = Maybe<Workflow[]>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext, WorkflowsArgs>;
  export interface WorkflowsArgs {
    
    where?: Maybe<WorkflowWhereInput>;
    
    orderBy?: Maybe<WorkflowOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type InvitesResolver<R = Maybe<Invite[]>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext, InvitesArgs>;
  export interface InvitesArgs {
    
    where?: Maybe<InviteWhereInput>;
    
    orderBy?: Maybe<InviteOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type NameResolver<R = string, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace WorkflowResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Workflow> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    jobs?: JobsResolver<Maybe<Job[]>, TypeParent, TContext>;
    
    name?: NameResolver<string, TypeParent, TContext>;
    
    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;
    
    stages?: StagesResolver<Maybe<Stage[]>, TypeParent, TContext>;
    
    disqualifications?: DisqualificationsResolver<Maybe<Disqualification[]>, TypeParent, TContext>;
    
    fields?: FieldsResolver<Maybe<Field[]>, TypeParent, TContext>;
    
    reviews?: ReviewsResolver<Maybe<Review[]>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobsResolver<R = Maybe<Job[]>, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext, JobsArgs>;
  export interface JobsArgs {
    
    where?: Maybe<JobWhereInput>;
    
    orderBy?: Maybe<JobOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type NameResolver<R = string, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<R = Maybe<string>, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext>;
  export type StagesResolver<R = Maybe<Stage[]>, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext, StagesArgs>;
  export interface StagesArgs {
    
    where?: Maybe<StageWhereInput>;
    
    orderBy?: Maybe<StageOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type DisqualificationsResolver<R = Maybe<Disqualification[]>, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext, DisqualificationsArgs>;
  export interface DisqualificationsArgs {
    
    where?: Maybe<DisqualificationWhereInput>;
    
    orderBy?: Maybe<DisqualificationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type FieldsResolver<R = Maybe<Field[]>, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext, FieldsArgs>;
  export interface FieldsArgs {
    
    where?: Maybe<FieldWhereInput>;
    
    orderBy?: Maybe<FieldOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type ReviewsResolver<R = Maybe<Review[]>, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext, ReviewsArgs>;
  export interface ReviewsArgs {
    
    where?: Maybe<ReviewWhereInput>;
    
    orderBy?: Maybe<ReviewOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


}

export namespace InviteResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Invite> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    email?: EmailResolver<string, TypeParent, TContext>;
    
    expireAt?: ExpireAtResolver<DateTime, TypeParent, TContext>;
    
    invitedBy?: InvitedByResolver<User, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EmailResolver<R = string, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ExpireAtResolver<R = DateTime, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
  export type InvitedByResolver<R = User, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace LocationResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Location> {
    
    id?: IdResolver<string, TypeParent, TContext>;
    
    createdAt?: CreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    country?: CountryResolver<string, TypeParent, TContext>;
    
    region?: RegionResolver<Maybe<string>, TypeParent, TContext>;
    
    city?: CityResolver<string, TypeParent, TContext>;
    
    zip?: ZipResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type IdResolver<R = string, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<R = DateTime, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<R = DateTime, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CountryResolver<R = string, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type RegionResolver<R = Maybe<string>, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CityResolver<R = string, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ZipResolver<R = Maybe<string>, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace ApplicationConnectionResolvers {
  export interface Resolvers<TContext = {}, TypeParent = ApplicationConnection> {
    
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: EdgesResolver<(Maybe<ApplicationEdge>)[], TypeParent, TContext>;
    
    aggregate?: AggregateResolver<AggregateApplication, TypeParent, TContext>;
  }


  export type PageInfoResolver<R = PageInfo, Parent = ApplicationConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EdgesResolver<R = (Maybe<ApplicationEdge>)[], Parent = ApplicationConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AggregateResolver<R = AggregateApplication, Parent = ApplicationConnection, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace PageInfoResolvers {
  export interface Resolvers<TContext = {}, TypeParent = PageInfo> {
    
    hasNextPage?: HasNextPageResolver<boolean, TypeParent, TContext>;
    
    hasPreviousPage?: HasPreviousPageResolver<boolean, TypeParent, TContext>;
    
    startCursor?: StartCursorResolver<Maybe<string>, TypeParent, TContext>;
    
    endCursor?: EndCursorResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type HasNextPageResolver<R = boolean, Parent = PageInfo, TContext = {}> = Resolver<R, Parent, TContext>;
  export type HasPreviousPageResolver<R = boolean, Parent = PageInfo, TContext = {}> = Resolver<R, Parent, TContext>;
  export type StartCursorResolver<R = Maybe<string>, Parent = PageInfo, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EndCursorResolver<R = Maybe<string>, Parent = PageInfo, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace ApplicationEdgeResolvers {
  export interface Resolvers<TContext = {}, TypeParent = ApplicationEdge> {
    
    node?: NodeResolver<Application, TypeParent, TContext>;
    
    cursor?: CursorResolver<string, TypeParent, TContext>;
  }


  export type NodeResolver<R = Application, Parent = ApplicationEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CursorResolver<R = string, Parent = ApplicationEdge, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace AggregateApplicationResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AggregateApplication> {
    
    count?: CountResolver<number, TypeParent, TContext>;
  }


  export type CountResolver<R = number, Parent = AggregateApplication, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace CandidateConnectionResolvers {
  export interface Resolvers<TContext = {}, TypeParent = CandidateConnection> {
    
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: EdgesResolver<(Maybe<CandidateEdge>)[], TypeParent, TContext>;
    
    aggregate?: AggregateResolver<AggregateCandidate, TypeParent, TContext>;
  }


  export type PageInfoResolver<R = PageInfo, Parent = CandidateConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EdgesResolver<R = (Maybe<CandidateEdge>)[], Parent = CandidateConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AggregateResolver<R = AggregateCandidate, Parent = CandidateConnection, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace CandidateEdgeResolvers {
  export interface Resolvers<TContext = {}, TypeParent = CandidateEdge> {
    
    node?: NodeResolver<Candidate, TypeParent, TContext>;
    
    cursor?: CursorResolver<string, TypeParent, TContext>;
  }


  export type NodeResolver<R = Candidate, Parent = CandidateEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CursorResolver<R = string, Parent = CandidateEdge, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace AggregateCandidateResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AggregateCandidate> {
    
    count?: CountResolver<number, TypeParent, TContext>;
  }


  export type CountResolver<R = number, Parent = AggregateCandidate, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace JobConnectionResolvers {
  export interface Resolvers<TContext = {}, TypeParent = JobConnection> {
    
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: EdgesResolver<(Maybe<JobEdge>)[], TypeParent, TContext>;
    
    aggregate?: AggregateResolver<AggregateJob, TypeParent, TContext>;
  }


  export type PageInfoResolver<R = PageInfo, Parent = JobConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EdgesResolver<R = (Maybe<JobEdge>)[], Parent = JobConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AggregateResolver<R = AggregateJob, Parent = JobConnection, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace JobEdgeResolvers {
  export interface Resolvers<TContext = {}, TypeParent = JobEdge> {
    
    node?: NodeResolver<Job, TypeParent, TContext>;
    
    cursor?: CursorResolver<string, TypeParent, TContext>;
  }


  export type NodeResolver<R = Job, Parent = JobEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CursorResolver<R = string, Parent = JobEdge, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace AggregateJobResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AggregateJob> {
    
    count?: CountResolver<number, TypeParent, TContext>;
  }


  export type CountResolver<R = number, Parent = AggregateJob, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace SourceConnectionResolvers {
  export interface Resolvers<TContext = {}, TypeParent = SourceConnection> {
    
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: EdgesResolver<(Maybe<SourceEdge>)[], TypeParent, TContext>;
    
    aggregate?: AggregateResolver<AggregateSource, TypeParent, TContext>;
  }


  export type PageInfoResolver<R = PageInfo, Parent = SourceConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EdgesResolver<R = (Maybe<SourceEdge>)[], Parent = SourceConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AggregateResolver<R = AggregateSource, Parent = SourceConnection, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace SourceEdgeResolvers {
  export interface Resolvers<TContext = {}, TypeParent = SourceEdge> {
    
    node?: NodeResolver<Source, TypeParent, TContext>;
    
    cursor?: CursorResolver<string, TypeParent, TContext>;
  }


  export type NodeResolver<R = Source, Parent = SourceEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CursorResolver<R = string, Parent = SourceEdge, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace AggregateSourceResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AggregateSource> {
    
    count?: CountResolver<number, TypeParent, TContext>;
  }


  export type CountResolver<R = number, Parent = AggregateSource, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace TagConnectionResolvers {
  export interface Resolvers<TContext = {}, TypeParent = TagConnection> {
    
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: EdgesResolver<(Maybe<TagEdge>)[], TypeParent, TContext>;
    
    aggregate?: AggregateResolver<AggregateTag, TypeParent, TContext>;
  }


  export type PageInfoResolver<R = PageInfo, Parent = TagConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EdgesResolver<R = (Maybe<TagEdge>)[], Parent = TagConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AggregateResolver<R = AggregateTag, Parent = TagConnection, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace TagEdgeResolvers {
  export interface Resolvers<TContext = {}, TypeParent = TagEdge> {
    
    node?: NodeResolver<Tag, TypeParent, TContext>;
    
    cursor?: CursorResolver<string, TypeParent, TContext>;
  }


  export type NodeResolver<R = Tag, Parent = TagEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CursorResolver<R = string, Parent = TagEdge, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace AggregateTagResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AggregateTag> {
    
    count?: CountResolver<number, TypeParent, TContext>;
  }


  export type CountResolver<R = number, Parent = AggregateTag, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace TaskConnectionResolvers {
  export interface Resolvers<TContext = {}, TypeParent = TaskConnection> {
    
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: EdgesResolver<(Maybe<TaskEdge>)[], TypeParent, TContext>;
    
    aggregate?: AggregateResolver<AggregateTask, TypeParent, TContext>;
  }


  export type PageInfoResolver<R = PageInfo, Parent = TaskConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EdgesResolver<R = (Maybe<TaskEdge>)[], Parent = TaskConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AggregateResolver<R = AggregateTask, Parent = TaskConnection, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace TaskEdgeResolvers {
  export interface Resolvers<TContext = {}, TypeParent = TaskEdge> {
    
    node?: NodeResolver<Task, TypeParent, TContext>;
    
    cursor?: CursorResolver<string, TypeParent, TContext>;
  }


  export type NodeResolver<R = Task, Parent = TaskEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CursorResolver<R = string, Parent = TaskEdge, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace AggregateTaskResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AggregateTask> {
    
    count?: CountResolver<number, TypeParent, TContext>;
  }


  export type CountResolver<R = number, Parent = AggregateTask, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace UserConnectionResolvers {
  export interface Resolvers<TContext = {}, TypeParent = UserConnection> {
    
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: EdgesResolver<(Maybe<UserEdge>)[], TypeParent, TContext>;
    
    aggregate?: AggregateResolver<AggregateUser, TypeParent, TContext>;
  }


  export type PageInfoResolver<R = PageInfo, Parent = UserConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EdgesResolver<R = (Maybe<UserEdge>)[], Parent = UserConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AggregateResolver<R = AggregateUser, Parent = UserConnection, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace UserEdgeResolvers {
  export interface Resolvers<TContext = {}, TypeParent = UserEdge> {
    
    node?: NodeResolver<User, TypeParent, TContext>;
    
    cursor?: CursorResolver<string, TypeParent, TContext>;
  }


  export type NodeResolver<R = User, Parent = UserEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CursorResolver<R = string, Parent = UserEdge, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace AggregateUserResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AggregateUser> {
    
    count?: CountResolver<number, TypeParent, TContext>;
  }


  export type CountResolver<R = number, Parent = AggregateUser, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace WorkflowConnectionResolvers {
  export interface Resolvers<TContext = {}, TypeParent = WorkflowConnection> {
    
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: EdgesResolver<(Maybe<WorkflowEdge>)[], TypeParent, TContext>;
    
    aggregate?: AggregateResolver<AggregateWorkflow, TypeParent, TContext>;
  }


  export type PageInfoResolver<R = PageInfo, Parent = WorkflowConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type EdgesResolver<R = (Maybe<WorkflowEdge>)[], Parent = WorkflowConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AggregateResolver<R = AggregateWorkflow, Parent = WorkflowConnection, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace WorkflowEdgeResolvers {
  export interface Resolvers<TContext = {}, TypeParent = WorkflowEdge> {
    
    node?: NodeResolver<Workflow, TypeParent, TContext>;
    
    cursor?: CursorResolver<string, TypeParent, TContext>;
  }


  export type NodeResolver<R = Workflow, Parent = WorkflowEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CursorResolver<R = string, Parent = WorkflowEdge, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace AggregateWorkflowResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AggregateWorkflow> {
    
    count?: CountResolver<number, TypeParent, TContext>;
  }


  export type CountResolver<R = number, Parent = AggregateWorkflow, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace MutationResolvers {
  export interface Resolvers<TContext = {}, TypeParent = {}> {
    
    createApplication?: CreateApplicationResolver<Application, TypeParent, TContext>;
    
    updateApplication?: UpdateApplicationResolver<Maybe<Application>, TypeParent, TContext>;
    
    updateManyApplications?: UpdateManyApplicationsResolver<BatchPayload, TypeParent, TContext>;
    
    upsertApplication?: UpsertApplicationResolver<Application, TypeParent, TContext>;
    
    deleteApplication?: DeleteApplicationResolver<Maybe<Application>, TypeParent, TContext>;
    
    deleteManyApplications?: DeleteManyApplicationsResolver<BatchPayload, TypeParent, TContext>;
    
    createCandidate?: CreateCandidateResolver<Candidate, TypeParent, TContext>;
    
    updateCandidate?: UpdateCandidateResolver<Maybe<Candidate>, TypeParent, TContext>;
    
    updateManyCandidates?: UpdateManyCandidatesResolver<BatchPayload, TypeParent, TContext>;
    
    upsertCandidate?: UpsertCandidateResolver<Candidate, TypeParent, TContext>;
    
    deleteCandidate?: DeleteCandidateResolver<Maybe<Candidate>, TypeParent, TContext>;
    
    deleteManyCandidates?: DeleteManyCandidatesResolver<BatchPayload, TypeParent, TContext>;
    
    createJob?: CreateJobResolver<Job, TypeParent, TContext>;
    
    updateJob?: UpdateJobResolver<Maybe<Job>, TypeParent, TContext>;
    
    updateManyJobs?: UpdateManyJobsResolver<BatchPayload, TypeParent, TContext>;
    
    upsertJob?: UpsertJobResolver<Job, TypeParent, TContext>;
    
    deleteJob?: DeleteJobResolver<Maybe<Job>, TypeParent, TContext>;
    
    deleteManyJobs?: DeleteManyJobsResolver<BatchPayload, TypeParent, TContext>;
    
    createSource?: CreateSourceResolver<Source, TypeParent, TContext>;
    
    updateSource?: UpdateSourceResolver<Maybe<Source>, TypeParent, TContext>;
    
    updateManySources?: UpdateManySourcesResolver<BatchPayload, TypeParent, TContext>;
    
    upsertSource?: UpsertSourceResolver<Source, TypeParent, TContext>;
    
    deleteSource?: DeleteSourceResolver<Maybe<Source>, TypeParent, TContext>;
    
    deleteManySources?: DeleteManySourcesResolver<BatchPayload, TypeParent, TContext>;
    
    createTag?: CreateTagResolver<Tag, TypeParent, TContext>;
    
    updateTag?: UpdateTagResolver<Maybe<Tag>, TypeParent, TContext>;
    
    updateManyTags?: UpdateManyTagsResolver<BatchPayload, TypeParent, TContext>;
    
    upsertTag?: UpsertTagResolver<Tag, TypeParent, TContext>;
    
    deleteTag?: DeleteTagResolver<Maybe<Tag>, TypeParent, TContext>;
    
    deleteManyTags?: DeleteManyTagsResolver<BatchPayload, TypeParent, TContext>;
    
    createTask?: CreateTaskResolver<Task, TypeParent, TContext>;
    
    updateTask?: UpdateTaskResolver<Maybe<Task>, TypeParent, TContext>;
    
    updateManyTasks?: UpdateManyTasksResolver<BatchPayload, TypeParent, TContext>;
    
    upsertTask?: UpsertTaskResolver<Task, TypeParent, TContext>;
    
    deleteTask?: DeleteTaskResolver<Maybe<Task>, TypeParent, TContext>;
    
    deleteManyTasks?: DeleteManyTasksResolver<BatchPayload, TypeParent, TContext>;
    
    createWorkflow?: CreateWorkflowResolver<Workflow, TypeParent, TContext>;
    
    updateWorkflow?: UpdateWorkflowResolver<Maybe<Workflow>, TypeParent, TContext>;
    
    updateManyWorkflows?: UpdateManyWorkflowsResolver<BatchPayload, TypeParent, TContext>;
    
    upsertWorkflow?: UpsertWorkflowResolver<Workflow, TypeParent, TContext>;
    
    deleteWorkflow?: DeleteWorkflowResolver<Maybe<Workflow>, TypeParent, TContext>;
    
    deleteManyWorkflows?: DeleteManyWorkflowsResolver<BatchPayload, TypeParent, TContext>;
  }


  export type CreateApplicationResolver<R = Application, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, CreateApplicationArgs>;
  export interface CreateApplicationArgs {
    
    data: ApplicationCreateInput;
  }


  export type UpdateApplicationResolver<R = Maybe<Application>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateApplicationArgs>;
  export interface UpdateApplicationArgs {
    
    data: ApplicationUpdateInput;
    
    where: ApplicationWhereUniqueInput;
  }


  export type UpdateManyApplicationsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateManyApplicationsArgs>;
  export interface UpdateManyApplicationsArgs {
    
    data: ApplicationUpdateManyMutationInput;
    
    where?: Maybe<ApplicationWhereInput>;
  }


  export type UpsertApplicationResolver<R = Application, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpsertApplicationArgs>;
  export interface UpsertApplicationArgs {
    
    where: ApplicationWhereUniqueInput;
    
    create: ApplicationCreateInput;
    
    update: ApplicationUpdateInput;
  }


  export type DeleteApplicationResolver<R = Maybe<Application>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteApplicationArgs>;
  export interface DeleteApplicationArgs {
    
    where: ApplicationWhereUniqueInput;
  }


  export type DeleteManyApplicationsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteManyApplicationsArgs>;
  export interface DeleteManyApplicationsArgs {
    
    where?: Maybe<ApplicationWhereInput>;
  }


  export type CreateCandidateResolver<R = Candidate, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, CreateCandidateArgs>;
  export interface CreateCandidateArgs {
    
    data: CandidateCreateInput;
  }


  export type UpdateCandidateResolver<R = Maybe<Candidate>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateCandidateArgs>;
  export interface UpdateCandidateArgs {
    
    data: CandidateUpdateInput;
    
    where: CandidateWhereUniqueInput;
  }


  export type UpdateManyCandidatesResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateManyCandidatesArgs>;
  export interface UpdateManyCandidatesArgs {
    
    data: CandidateUpdateManyMutationInput;
    
    where?: Maybe<CandidateWhereInput>;
  }


  export type UpsertCandidateResolver<R = Candidate, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpsertCandidateArgs>;
  export interface UpsertCandidateArgs {
    
    where: CandidateWhereUniqueInput;
    
    create: CandidateCreateInput;
    
    update: CandidateUpdateInput;
  }


  export type DeleteCandidateResolver<R = Maybe<Candidate>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteCandidateArgs>;
  export interface DeleteCandidateArgs {
    
    where: CandidateWhereUniqueInput;
  }


  export type DeleteManyCandidatesResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteManyCandidatesArgs>;
  export interface DeleteManyCandidatesArgs {
    
    where?: Maybe<CandidateWhereInput>;
  }


  export type CreateJobResolver<R = Job, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, CreateJobArgs>;
  export interface CreateJobArgs {
    
    data: JobCreateInput;
  }


  export type UpdateJobResolver<R = Maybe<Job>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateJobArgs>;
  export interface UpdateJobArgs {
    
    data: JobUpdateInput;
    
    where: JobWhereUniqueInput;
  }


  export type UpdateManyJobsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateManyJobsArgs>;
  export interface UpdateManyJobsArgs {
    
    data: JobUpdateManyMutationInput;
    
    where?: Maybe<JobWhereInput>;
  }


  export type UpsertJobResolver<R = Job, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpsertJobArgs>;
  export interface UpsertJobArgs {
    
    where: JobWhereUniqueInput;
    
    create: JobCreateInput;
    
    update: JobUpdateInput;
  }


  export type DeleteJobResolver<R = Maybe<Job>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteJobArgs>;
  export interface DeleteJobArgs {
    
    where: JobWhereUniqueInput;
  }


  export type DeleteManyJobsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteManyJobsArgs>;
  export interface DeleteManyJobsArgs {
    
    where?: Maybe<JobWhereInput>;
  }


  export type CreateSourceResolver<R = Source, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, CreateSourceArgs>;
  export interface CreateSourceArgs {
    
    data: SourceCreateInput;
  }


  export type UpdateSourceResolver<R = Maybe<Source>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateSourceArgs>;
  export interface UpdateSourceArgs {
    
    data: SourceUpdateInput;
    
    where: SourceWhereUniqueInput;
  }


  export type UpdateManySourcesResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateManySourcesArgs>;
  export interface UpdateManySourcesArgs {
    
    data: SourceUpdateManyMutationInput;
    
    where?: Maybe<SourceWhereInput>;
  }


  export type UpsertSourceResolver<R = Source, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpsertSourceArgs>;
  export interface UpsertSourceArgs {
    
    where: SourceWhereUniqueInput;
    
    create: SourceCreateInput;
    
    update: SourceUpdateInput;
  }


  export type DeleteSourceResolver<R = Maybe<Source>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteSourceArgs>;
  export interface DeleteSourceArgs {
    
    where: SourceWhereUniqueInput;
  }


  export type DeleteManySourcesResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteManySourcesArgs>;
  export interface DeleteManySourcesArgs {
    
    where?: Maybe<SourceWhereInput>;
  }


  export type CreateTagResolver<R = Tag, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, CreateTagArgs>;
  export interface CreateTagArgs {
    
    data: TagCreateInput;
  }


  export type UpdateTagResolver<R = Maybe<Tag>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateTagArgs>;
  export interface UpdateTagArgs {
    
    data: TagUpdateInput;
    
    where: TagWhereUniqueInput;
  }


  export type UpdateManyTagsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateManyTagsArgs>;
  export interface UpdateManyTagsArgs {
    
    data: TagUpdateManyMutationInput;
    
    where?: Maybe<TagWhereInput>;
  }


  export type UpsertTagResolver<R = Tag, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpsertTagArgs>;
  export interface UpsertTagArgs {
    
    where: TagWhereUniqueInput;
    
    create: TagCreateInput;
    
    update: TagUpdateInput;
  }


  export type DeleteTagResolver<R = Maybe<Tag>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteTagArgs>;
  export interface DeleteTagArgs {
    
    where: TagWhereUniqueInput;
  }


  export type DeleteManyTagsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteManyTagsArgs>;
  export interface DeleteManyTagsArgs {
    
    where?: Maybe<TagWhereInput>;
  }


  export type CreateTaskResolver<R = Task, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, CreateTaskArgs>;
  export interface CreateTaskArgs {
    
    data: TaskCreateInput;
  }


  export type UpdateTaskResolver<R = Maybe<Task>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateTaskArgs>;
  export interface UpdateTaskArgs {
    
    data: TaskUpdateInput;
    
    where: TaskWhereUniqueInput;
  }


  export type UpdateManyTasksResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateManyTasksArgs>;
  export interface UpdateManyTasksArgs {
    
    data: TaskUpdateManyMutationInput;
    
    where?: Maybe<TaskWhereInput>;
  }


  export type UpsertTaskResolver<R = Task, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpsertTaskArgs>;
  export interface UpsertTaskArgs {
    
    where: TaskWhereUniqueInput;
    
    create: TaskCreateInput;
    
    update: TaskUpdateInput;
  }


  export type DeleteTaskResolver<R = Maybe<Task>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteTaskArgs>;
  export interface DeleteTaskArgs {
    
    where: TaskWhereUniqueInput;
  }


  export type DeleteManyTasksResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteManyTasksArgs>;
  export interface DeleteManyTasksArgs {
    
    where?: Maybe<TaskWhereInput>;
  }


  export type CreateWorkflowResolver<R = Workflow, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, CreateWorkflowArgs>;
  export interface CreateWorkflowArgs {
    
    data: WorkflowCreateInput;
  }


  export type UpdateWorkflowResolver<R = Maybe<Workflow>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateWorkflowArgs>;
  export interface UpdateWorkflowArgs {
    
    data: WorkflowUpdateInput;
    
    where: WorkflowWhereUniqueInput;
  }


  export type UpdateManyWorkflowsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpdateManyWorkflowsArgs>;
  export interface UpdateManyWorkflowsArgs {
    
    data: WorkflowUpdateManyMutationInput;
    
    where?: Maybe<WorkflowWhereInput>;
  }


  export type UpsertWorkflowResolver<R = Workflow, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, UpsertWorkflowArgs>;
  export interface UpsertWorkflowArgs {
    
    where: WorkflowWhereUniqueInput;
    
    create: WorkflowCreateInput;
    
    update: WorkflowUpdateInput;
  }


  export type DeleteWorkflowResolver<R = Maybe<Workflow>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteWorkflowArgs>;
  export interface DeleteWorkflowArgs {
    
    where: WorkflowWhereUniqueInput;
  }


  export type DeleteManyWorkflowsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, DeleteManyWorkflowsArgs>;
  export interface DeleteManyWorkflowsArgs {
    
    where?: Maybe<WorkflowWhereInput>;
  }


}

export namespace BatchPayloadResolvers {
  export interface Resolvers<TContext = {}, TypeParent = BatchPayload> {
    
    count?: CountResolver<Long, TypeParent, TContext>;
  }


  export type CountResolver<R = Long, Parent = BatchPayload, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace AuthPayloadResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AuthPayload> {
    
    token?: TokenResolver<string, TypeParent, TContext>;
    
    refresh?: RefreshResolver<string, TypeParent, TContext>;
  }


  export type TokenResolver<R = string, Parent = AuthPayload, TContext = {}> = Resolver<R, Parent, TContext>;
  export type RefreshResolver<R = string, Parent = AuthPayload, TContext = {}> = Resolver<R, Parent, TContext>;
}

export namespace AccessPayloadResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AccessPayload> {
    
    token?: TokenResolver<string, TypeParent, TContext>;
  }


  export type TokenResolver<R = string, Parent = AccessPayload, TContext = {}> = Resolver<R, Parent, TContext>;
}



/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<Result, SkipDirectiveArgs, {}>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<Result, IncludeDirectiveArgs, {}>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<Result, DeprecatedDirectiveArgs, {}>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}


export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<DateTime, any> {
  name: 'DateTime'
}
export interface JsonScalarConfig extends GraphQLScalarTypeConfig<Json, any> {
  name: 'Json'
}
export interface LongScalarConfig extends GraphQLScalarTypeConfig<Long, any> {
  name: 'Long'
}

export type IResolvers<TContext = {}> = {
    Query?: QueryResolvers.Resolvers<TContext>;
    Application?: ApplicationResolvers.Resolvers<TContext>;
    DisqualificationInstance?: DisqualificationInstanceResolvers.Resolvers<TContext>;
    Disqualification?: DisqualificationResolvers.Resolvers<TContext>;
    User?: UserResolvers.Resolvers<TContext>;
    Task?: TaskResolvers.Resolvers<TContext>;
    Candidate?: CandidateResolvers.Resolvers<TContext>;
    File?: FileResolvers.Resolvers<TContext>;
    Tag?: TagResolvers.Resolvers<TContext>;
    Source?: SourceResolvers.Resolvers<TContext>;
    FieldInstance?: FieldInstanceResolvers.Resolvers<TContext>;
    Field?: FieldResolvers.Resolvers<TContext>;
    Comment?: CommentResolvers.Resolvers<TContext>;
    Stage?: StageResolvers.Resolvers<TContext>;
    ReviewInstance?: ReviewInstanceResolvers.Resolvers<TContext>;
    Review?: ReviewResolvers.Resolvers<TContext>;
    Job?: JobResolvers.Resolvers<TContext>;
    Workspace?: WorkspaceResolvers.Resolvers<TContext>;
    Workflow?: WorkflowResolvers.Resolvers<TContext>;
    Invite?: InviteResolvers.Resolvers<TContext>;
    Location?: LocationResolvers.Resolvers<TContext>;
    ApplicationConnection?: ApplicationConnectionResolvers.Resolvers<TContext>;
    PageInfo?: PageInfoResolvers.Resolvers<TContext>;
    ApplicationEdge?: ApplicationEdgeResolvers.Resolvers<TContext>;
    AggregateApplication?: AggregateApplicationResolvers.Resolvers<TContext>;
    CandidateConnection?: CandidateConnectionResolvers.Resolvers<TContext>;
    CandidateEdge?: CandidateEdgeResolvers.Resolvers<TContext>;
    AggregateCandidate?: AggregateCandidateResolvers.Resolvers<TContext>;
    JobConnection?: JobConnectionResolvers.Resolvers<TContext>;
    JobEdge?: JobEdgeResolvers.Resolvers<TContext>;
    AggregateJob?: AggregateJobResolvers.Resolvers<TContext>;
    SourceConnection?: SourceConnectionResolvers.Resolvers<TContext>;
    SourceEdge?: SourceEdgeResolvers.Resolvers<TContext>;
    AggregateSource?: AggregateSourceResolvers.Resolvers<TContext>;
    TagConnection?: TagConnectionResolvers.Resolvers<TContext>;
    TagEdge?: TagEdgeResolvers.Resolvers<TContext>;
    AggregateTag?: AggregateTagResolvers.Resolvers<TContext>;
    TaskConnection?: TaskConnectionResolvers.Resolvers<TContext>;
    TaskEdge?: TaskEdgeResolvers.Resolvers<TContext>;
    AggregateTask?: AggregateTaskResolvers.Resolvers<TContext>;
    UserConnection?: UserConnectionResolvers.Resolvers<TContext>;
    UserEdge?: UserEdgeResolvers.Resolvers<TContext>;
    AggregateUser?: AggregateUserResolvers.Resolvers<TContext>;
    WorkflowConnection?: WorkflowConnectionResolvers.Resolvers<TContext>;
    WorkflowEdge?: WorkflowEdgeResolvers.Resolvers<TContext>;
    AggregateWorkflow?: AggregateWorkflowResolvers.Resolvers<TContext>;
    Mutation?: MutationResolvers.Resolvers<TContext>;
    BatchPayload?: BatchPayloadResolvers.Resolvers<TContext>;
    AuthPayload?: AuthPayloadResolvers.Resolvers<TContext>;
    AccessPayload?: AccessPayloadResolvers.Resolvers<TContext>;
    DateTime?: GraphQLScalarType;
    Json?: GraphQLScalarType;
    Long?: GraphQLScalarType;
} & { [typeName: string] : never };

export type IDirectiveResolvers<Result> = {
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string] : never };
