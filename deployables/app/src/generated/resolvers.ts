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
  
  field?: Maybe<FieldWhereInput>;
  
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
  
  disqualification?: Maybe<DisqualificationWhereInput>;
  
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

export interface ApplicationCreateInput {
  
  type: ApplicationType;
  
  disqualification?: Maybe<DisqualificationInstanceCreateOneInput>;
  
  stage: StageCreateOneInput;
  
  job: JobCreateOneWithoutApplicationsInput;
  
  candidate: CandidateCreateOneWithoutApplicationsInput;
}

export interface DisqualificationInstanceCreateOneInput {
  
  create?: Maybe<DisqualificationInstanceCreateInput>;
  
  connect?: Maybe<DisqualificationInstanceWhereUniqueInput>;
}

export interface DisqualificationInstanceCreateInput {
  
  disqualification: DisqualificationCreateOneInput;
  
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
  
  firstName: string;
  
  lastName: string;
  
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
  
  field: FieldCreateOneInput;
  
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

export interface JobCreateOneWithoutApplicationsInput {
  
  create?: Maybe<JobCreateWithoutApplicationsInput>;
  
  connect?: Maybe<JobWhereUniqueInput>;
}

export interface JobCreateWithoutApplicationsInput {
  
  workspace: WorkspaceCreateOneWithoutJobsInput;
  
  workflow: WorkflowCreateOneInput;
  
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
  
  firstName: string;
  
  lastName: string;
  
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
  
  name: string;
  
  description?: Maybe<string>;
  
  stages?: Maybe<StageCreateManyInput>;
  
  disqualifications?: Maybe<DisqualificationCreateManyInput>;
  
  fields?: Maybe<FieldCreateManyInput>;
}

export interface StageCreateManyInput {
  
  create?: Maybe<StageCreateInput[]>;
  
  connect?: Maybe<StageWhereUniqueInput[]>;
}

export interface DisqualificationCreateManyInput {
  
  create?: Maybe<DisqualificationCreateInput[]>;
  
  connect?: Maybe<DisqualificationWhereUniqueInput[]>;
}

export interface FieldCreateManyInput {
  
  create?: Maybe<FieldCreateInput[]>;
  
  connect?: Maybe<FieldWhereUniqueInput[]>;
}

export interface WorkflowWhereUniqueInput {
  
  id?: Maybe<string>;
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

export interface WorkflowCreateOneInput {
  
  create?: Maybe<WorkflowCreateInput>;
  
  connect?: Maybe<WorkflowWhereUniqueInput>;
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

export interface DisqualificationInstanceWhereUniqueInput {
  
  id?: Maybe<string>;
}

export interface CandidateCreateOneWithoutApplicationsInput {
  
  create?: Maybe<CandidateCreateWithoutApplicationsInput>;
  
  connect?: Maybe<CandidateWhereUniqueInput>;
}

export interface CandidateCreateWithoutApplicationsInput {
  
  firstName: string;
  
  lastName: string;
  
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

export interface ApplicationUpdateInput {
  
  type?: Maybe<ApplicationType>;
  
  disqualification?: Maybe<DisqualificationInstanceUpdateOneInput>;
  
  stage?: Maybe<StageUpdateOneRequiredInput>;
  
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
  
  disqualification?: Maybe<DisqualificationUpdateOneRequiredInput>;
  
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
  
  field?: Maybe<FieldUpdateOneRequiredInput>;
  
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

export interface JobUpdateOneRequiredWithoutApplicationsInput {
  
  create?: Maybe<JobCreateWithoutApplicationsInput>;
  
  update?: Maybe<JobUpdateWithoutApplicationsDataInput>;
  
  upsert?: Maybe<JobUpsertWithoutApplicationsInput>;
  
  connect?: Maybe<JobWhereUniqueInput>;
}

export interface JobUpdateWithoutApplicationsDataInput {
  
  workspace?: Maybe<WorkspaceUpdateOneRequiredWithoutJobsInput>;
  
  workflow?: Maybe<WorkflowUpdateOneRequiredInput>;
  
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
  
  name?: Maybe<string>;
  
  description?: Maybe<string>;
  
  stages?: Maybe<StageUpdateManyInput>;
  
  disqualifications?: Maybe<DisqualificationUpdateManyInput>;
  
  fields?: Maybe<FieldUpdateManyInput>;
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

export interface WorkflowUpdateOneRequiredInput {
  
  create?: Maybe<WorkflowCreateInput>;
  
  update?: Maybe<WorkflowUpdateDataInput>;
  
  upsert?: Maybe<WorkflowUpsertNestedInput>;
  
  connect?: Maybe<WorkflowWhereUniqueInput>;
}

export interface WorkflowUpsertNestedInput {
  
  update: WorkflowUpdateDataInput;
  
  create: WorkflowCreateInput;
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

export interface JobUpsertWithoutApplicationsInput {
  
  update: JobUpdateWithoutApplicationsDataInput;
  
  create: JobCreateWithoutApplicationsInput;
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  
  where: ApplicationWhereUniqueInput;
  
  update: ApplicationUpdateWithoutCandidateDataInput;
  
  create: ApplicationCreateWithoutCandidateInput;
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
  
  workflow: WorkflowCreateOneInput;
  
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
  
  candidate: CandidateCreateOneWithoutApplicationsInput;
}

export interface JobUpdateInput {
  
  workspace?: Maybe<WorkspaceUpdateOneRequiredWithoutJobsInput>;
  
  applications?: Maybe<ApplicationUpdateManyWithoutJobInput>;
  
  workflow?: Maybe<WorkflowUpdateOneRequiredInput>;
  
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
  
  candidate?: Maybe<CandidateUpdateOneRequiredWithoutApplicationsInput>;
}

export interface ApplicationUpsertWithWhereUniqueWithoutJobInput {
  
  where: ApplicationWhereUniqueInput;
  
  update: ApplicationUpdateWithoutJobDataInput;
  
  create: ApplicationCreateWithoutJobInput;
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

export interface ToastInput {
  
  message: string;
  
  type: ToastType;
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

  export enum ToastType {
    Info = "INFO",
    Success = "SUCCESS",
    Blocked = "BLOCKED",
    Warning = "WARNING",
    SevereWarning = "SEVERE_WARNING",
    Error = "ERROR",
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
  
  localField: string;
  
  localType: LocalType;
  
  toasts: Toast[];
}


export interface Application {
  
  createdAt: DateTime;
  
  id: string;
  
  updatedAt: DateTime;
  
  type: ApplicationType;
  
  disqualification?: Maybe<DisqualificationInstance>;
  
  stage: Stage;
  
  job: Job;
  
  candidate: Candidate;
}


export interface DisqualificationInstance {
  
  id: string;
  
  createdAt: DateTime;
  
  updatedAt: DateTime;
  
  disqualification: Disqualification;
  
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
  
  firstName: string;
  
  lastName: string;
  
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
  
  field: Field;
  
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
  
  name: string;
  
  description?: Maybe<string>;
  
  stages?: Maybe<Stage[]>;
  
  disqualifications?: Maybe<Disqualification[]>;
  
  fields?: Maybe<Field[]>;
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


export interface LocalType {
  
  id: string;
  
  name: string;
}


export interface Toast {
  
  id: string;
  
  createdAt: DateTime;
  
  message: string;
  
  type: ToastType;
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
  
  createToast: Toast;
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
export interface CreateToastMutationArgs {
  
  data: ToastInput;
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


  export interface QueryResolvers<TContext = {}, TypeParent = {}> {
    
    application?: QueryApplicationResolver<Maybe<Application>, TypeParent, TContext>;
    
    applications?: QueryApplicationsResolver<(Maybe<Application>)[], TypeParent, TContext>;
    
    applicationsConnection?: QueryApplicationsConnectionResolver<ApplicationConnection, TypeParent, TContext>;
    
    candidate?: QueryCandidateResolver<Maybe<Candidate>, TypeParent, TContext>;
    
    candidates?: QueryCandidatesResolver<(Maybe<Candidate>)[], TypeParent, TContext>;
    
    candidatesConnection?: QueryCandidatesConnectionResolver<CandidateConnection, TypeParent, TContext>;
    
    job?: QueryJobResolver<Maybe<Job>, TypeParent, TContext>;
    
    jobs?: QueryJobsResolver<(Maybe<Job>)[], TypeParent, TContext>;
    
    jobsConnection?: QueryJobsConnectionResolver<JobConnection, TypeParent, TContext>;
    
    source?: QuerySourceResolver<Maybe<Source>, TypeParent, TContext>;
    
    sources?: QuerySourcesResolver<(Maybe<Source>)[], TypeParent, TContext>;
    
    sourcesConnection?: QuerySourcesConnectionResolver<SourceConnection, TypeParent, TContext>;
    
    tag?: QueryTagResolver<Maybe<Tag>, TypeParent, TContext>;
    
    tags?: QueryTagsResolver<(Maybe<Tag>)[], TypeParent, TContext>;
    
    tagsConnection?: QueryTagsConnectionResolver<TagConnection, TypeParent, TContext>;
    
    task?: QueryTaskResolver<Maybe<Task>, TypeParent, TContext>;
    
    tasks?: QueryTasksResolver<(Maybe<Task>)[], TypeParent, TContext>;
    
    tasksConnection?: QueryTasksConnectionResolver<TaskConnection, TypeParent, TContext>;
    
    user?: QueryUserResolver<Maybe<User>, TypeParent, TContext>;
    
    users?: QueryUsersResolver<(Maybe<User>)[], TypeParent, TContext>;
    
    usersConnection?: QueryUsersConnectionResolver<UserConnection, TypeParent, TContext>;
    
    localField?: QueryLocalFieldResolver<string, TypeParent, TContext>;
    
    localType?: QueryLocalTypeResolver<LocalType, TypeParent, TContext>;
    
    toasts?: QueryToastsResolver<Toast[], TypeParent, TContext>;
  }


  export type QueryApplicationResolver<R = Maybe<Application>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryApplicationArgs>;
  export interface QueryApplicationArgs {
    
    where: ApplicationWhereUniqueInput;
  }


  export type QueryApplicationsResolver<R = (Maybe<Application>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryApplicationsArgs>;
  export interface QueryApplicationsArgs {
    
    where?: Maybe<ApplicationWhereInput>;
    
    orderBy?: Maybe<ApplicationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryApplicationsConnectionResolver<R = ApplicationConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryApplicationsConnectionArgs>;
  export interface QueryApplicationsConnectionArgs {
    
    where?: Maybe<ApplicationWhereInput>;
    
    orderBy?: Maybe<ApplicationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryCandidateResolver<R = Maybe<Candidate>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryCandidateArgs>;
  export interface QueryCandidateArgs {
    
    where: CandidateWhereUniqueInput;
  }


  export type QueryCandidatesResolver<R = (Maybe<Candidate>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryCandidatesArgs>;
  export interface QueryCandidatesArgs {
    
    where?: Maybe<CandidateWhereInput>;
    
    orderBy?: Maybe<CandidateOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryCandidatesConnectionResolver<R = CandidateConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryCandidatesConnectionArgs>;
  export interface QueryCandidatesConnectionArgs {
    
    where?: Maybe<CandidateWhereInput>;
    
    orderBy?: Maybe<CandidateOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryJobResolver<R = Maybe<Job>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryJobArgs>;
  export interface QueryJobArgs {
    
    where: JobWhereUniqueInput;
  }


  export type QueryJobsResolver<R = (Maybe<Job>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryJobsArgs>;
  export interface QueryJobsArgs {
    
    where?: Maybe<JobWhereInput>;
    
    orderBy?: Maybe<JobOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryJobsConnectionResolver<R = JobConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryJobsConnectionArgs>;
  export interface QueryJobsConnectionArgs {
    
    where?: Maybe<JobWhereInput>;
    
    orderBy?: Maybe<JobOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QuerySourceResolver<R = Maybe<Source>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QuerySourceArgs>;
  export interface QuerySourceArgs {
    
    where: SourceWhereUniqueInput;
  }


  export type QuerySourcesResolver<R = (Maybe<Source>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QuerySourcesArgs>;
  export interface QuerySourcesArgs {
    
    where?: Maybe<SourceWhereInput>;
    
    orderBy?: Maybe<SourceOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QuerySourcesConnectionResolver<R = SourceConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QuerySourcesConnectionArgs>;
  export interface QuerySourcesConnectionArgs {
    
    where?: Maybe<SourceWhereInput>;
    
    orderBy?: Maybe<SourceOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryTagResolver<R = Maybe<Tag>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryTagArgs>;
  export interface QueryTagArgs {
    
    where: TagWhereUniqueInput;
  }


  export type QueryTagsResolver<R = (Maybe<Tag>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryTagsArgs>;
  export interface QueryTagsArgs {
    
    where?: Maybe<TagWhereInput>;
    
    orderBy?: Maybe<TagOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryTagsConnectionResolver<R = TagConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryTagsConnectionArgs>;
  export interface QueryTagsConnectionArgs {
    
    where?: Maybe<TagWhereInput>;
    
    orderBy?: Maybe<TagOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryTaskResolver<R = Maybe<Task>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryTaskArgs>;
  export interface QueryTaskArgs {
    
    where: TaskWhereUniqueInput;
  }


  export type QueryTasksResolver<R = (Maybe<Task>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryTasksArgs>;
  export interface QueryTasksArgs {
    
    where?: Maybe<TaskWhereInput>;
    
    orderBy?: Maybe<TaskOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryTasksConnectionResolver<R = TaskConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryTasksConnectionArgs>;
  export interface QueryTasksConnectionArgs {
    
    where?: Maybe<TaskWhereInput>;
    
    orderBy?: Maybe<TaskOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryUserResolver<R = Maybe<User>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryUserArgs>;
  export interface QueryUserArgs {
    
    where: UserWhereUniqueInput;
  }


  export type QueryUsersResolver<R = (Maybe<User>)[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryUsersArgs>;
  export interface QueryUsersArgs {
    
    where?: Maybe<UserWhereInput>;
    
    orderBy?: Maybe<UserOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryUsersConnectionResolver<R = UserConnection, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, QueryUsersConnectionArgs>;
  export interface QueryUsersConnectionArgs {
    
    where?: Maybe<UserWhereInput>;
    
    orderBy?: Maybe<UserOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type QueryLocalFieldResolver<R = string, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext>;
  export type QueryLocalTypeResolver<R = LocalType, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext>;
  export type QueryToastsResolver<R = Toast[], Parent = {}, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface ApplicationResolvers<TContext = {}, TypeParent = Application> {
    
    createdAt?: ApplicationCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    id?: ApplicationIdResolver<string, TypeParent, TContext>;
    
    updatedAt?: ApplicationUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    type?: ApplicationTypeResolver<ApplicationType, TypeParent, TContext>;
    
    disqualification?: ApplicationDisqualificationResolver<Maybe<DisqualificationInstance>, TypeParent, TContext>;
    
    stage?: ApplicationStageResolver<Stage, TypeParent, TContext>;
    
    job?: ApplicationJobResolver<Job, TypeParent, TContext>;
    
    candidate?: ApplicationCandidateResolver<Candidate, TypeParent, TContext>;
  }


  export type ApplicationCreatedAtResolver<R = DateTime, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationIdResolver<R = string, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationUpdatedAtResolver<R = DateTime, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationTypeResolver<R = ApplicationType, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationDisqualificationResolver<R = Maybe<DisqualificationInstance>, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationStageResolver<R = Stage, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationJobResolver<R = Job, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationCandidateResolver<R = Candidate, Parent = Application, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface DisqualificationInstanceResolvers<TContext = {}, TypeParent = DisqualificationInstance> {
    
    id?: DisqualificationInstanceIdResolver<string, TypeParent, TContext>;
    
    createdAt?: DisqualificationInstanceCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: DisqualificationInstanceUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    disqualification?: DisqualificationInstanceDisqualificationResolver<Disqualification, TypeParent, TContext>;
    
    createdBy?: DisqualificationInstanceCreatedByResolver<User, TypeParent, TContext>;
    
    content?: DisqualificationInstanceContentResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type DisqualificationInstanceIdResolver<R = string, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DisqualificationInstanceCreatedAtResolver<R = DateTime, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DisqualificationInstanceUpdatedAtResolver<R = DateTime, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DisqualificationInstanceDisqualificationResolver<R = Disqualification, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DisqualificationInstanceCreatedByResolver<R = User, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DisqualificationInstanceContentResolver<R = Maybe<string>, Parent = DisqualificationInstance, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface DisqualificationResolvers<TContext = {}, TypeParent = Disqualification> {
    
    id?: DisqualificationIdResolver<string, TypeParent, TContext>;
    
    createdAt?: DisqualificationCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: DisqualificationUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    name?: DisqualificationNameResolver<string, TypeParent, TContext>;
    
    description?: DisqualificationDescriptionResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type DisqualificationIdResolver<R = string, Parent = Disqualification, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DisqualificationCreatedAtResolver<R = DateTime, Parent = Disqualification, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DisqualificationUpdatedAtResolver<R = DateTime, Parent = Disqualification, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DisqualificationNameResolver<R = string, Parent = Disqualification, TContext = {}> = Resolver<R, Parent, TContext>;
  export type DisqualificationDescriptionResolver<R = Maybe<string>, Parent = Disqualification, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface UserResolvers<TContext = {}, TypeParent = User> {
    
    id?: UserIdResolver<string, TypeParent, TContext>;
    
    createdAt?: UserCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: UserUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    settings?: UserSettingsResolver<Maybe<Json>, TypeParent, TContext>;
    
    tasks?: UserTasksResolver<Maybe<Task[]>, TypeParent, TContext>;
    
    firstName?: UserFirstNameResolver<string, TypeParent, TContext>;
    
    lastName?: UserLastNameResolver<string, TypeParent, TContext>;
    
    email?: UserEmailResolver<string, TypeParent, TContext>;
    
    username?: UserUsernameResolver<string, TypeParent, TContext>;
    
    lastLogin?: UserLastLoginResolver<Maybe<DateTime>, TypeParent, TContext>;
    
    deletedAt?: UserDeletedAtResolver<Maybe<DateTime>, TypeParent, TContext>;
    
    position?: UserPositionResolver<Maybe<string>, TypeParent, TContext>;
    
    avatar?: UserAvatarResolver<Maybe<File>, TypeParent, TContext>;
  }


  export type UserIdResolver<R = string, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserCreatedAtResolver<R = DateTime, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserUpdatedAtResolver<R = DateTime, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserSettingsResolver<R = Maybe<Json>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserTasksResolver<R = Maybe<Task[]>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext, UserTasksArgs>;
  export interface UserTasksArgs {
    
    where?: Maybe<TaskWhereInput>;
    
    orderBy?: Maybe<TaskOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type UserFirstNameResolver<R = string, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserLastNameResolver<R = string, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserEmailResolver<R = string, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserUsernameResolver<R = string, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserLastLoginResolver<R = Maybe<DateTime>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserDeletedAtResolver<R = Maybe<DateTime>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserPositionResolver<R = Maybe<string>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserAvatarResolver<R = Maybe<File>, Parent = User, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface TaskResolvers<TContext = {}, TypeParent = Task> {
    
    id?: TaskIdResolver<string, TypeParent, TContext>;
    
    createdAt?: TaskCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: TaskUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    owners?: TaskOwnersResolver<Maybe<User[]>, TypeParent, TContext>;
    
    candidate?: TaskCandidateResolver<Maybe<Candidate>, TypeParent, TContext>;
    
    title?: TaskTitleResolver<Maybe<string>, TypeParent, TContext>;
    
    description?: TaskDescriptionResolver<Maybe<string>, TypeParent, TContext>;
    
    dueAt?: TaskDueAtResolver<Maybe<DateTime>, TypeParent, TContext>;
  }


  export type TaskIdResolver<R = string, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TaskCreatedAtResolver<R = DateTime, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TaskUpdatedAtResolver<R = DateTime, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TaskOwnersResolver<R = Maybe<User[]>, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext, TaskOwnersArgs>;
  export interface TaskOwnersArgs {
    
    where?: Maybe<UserWhereInput>;
    
    orderBy?: Maybe<UserOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type TaskCandidateResolver<R = Maybe<Candidate>, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TaskTitleResolver<R = Maybe<string>, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TaskDescriptionResolver<R = Maybe<string>, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TaskDueAtResolver<R = Maybe<DateTime>, Parent = Task, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface CandidateResolvers<TContext = {}, TypeParent = Candidate> {
    
    id?: CandidateIdResolver<string, TypeParent, TContext>;
    
    createdAt?: CandidateCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: CandidateUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    firstName?: CandidateFirstNameResolver<string, TypeParent, TContext>;
    
    lastName?: CandidateLastNameResolver<string, TypeParent, TContext>;
    
    emails?: CandidateEmailsResolver<string[], TypeParent, TContext>;
    
    phones?: CandidatePhonesResolver<string[], TypeParent, TContext>;
    
    links?: CandidateLinksResolver<string[], TypeParent, TContext>;
    
    avatar?: CandidateAvatarResolver<Maybe<File>, TypeParent, TContext>;
    
    company?: CandidateCompanyResolver<Maybe<string>, TypeParent, TContext>;
    
    headline?: CandidateHeadlineResolver<Maybe<string>, TypeParent, TContext>;
    
    position?: CandidatePositionResolver<Maybe<string>, TypeParent, TContext>;
    
    resumesString?: CandidateResumesStringResolver<string[], TypeParent, TContext>;
    
    resumesFile?: CandidateResumesFileResolver<Maybe<File[]>, TypeParent, TContext>;
    
    coverLettersString?: CandidateCoverLettersStringResolver<string[], TypeParent, TContext>;
    
    coverLettersFile?: CandidateCoverLettersFileResolver<Maybe<File[]>, TypeParent, TContext>;
    
    tags?: CandidateTagsResolver<Maybe<Tag[]>, TypeParent, TContext>;
    
    sources?: CandidateSourcesResolver<Maybe<Source[]>, TypeParent, TContext>;
    
    fields?: CandidateFieldsResolver<Maybe<FieldInstance[]>, TypeParent, TContext>;
    
    tasks?: CandidateTasksResolver<Maybe<Task[]>, TypeParent, TContext>;
    
    applications?: CandidateApplicationsResolver<Maybe<Application[]>, TypeParent, TContext>;
    
    comments?: CandidateCommentsResolver<Maybe<Comment[]>, TypeParent, TContext>;
  }


  export type CandidateIdResolver<R = string, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateCreatedAtResolver<R = DateTime, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateUpdatedAtResolver<R = DateTime, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateFirstNameResolver<R = string, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateLastNameResolver<R = string, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateEmailsResolver<R = string[], Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidatePhonesResolver<R = string[], Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateLinksResolver<R = string[], Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateAvatarResolver<R = Maybe<File>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateCompanyResolver<R = Maybe<string>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateHeadlineResolver<R = Maybe<string>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidatePositionResolver<R = Maybe<string>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateResumesStringResolver<R = string[], Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateResumesFileResolver<R = Maybe<File[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, CandidateResumesFileArgs>;
  export interface CandidateResumesFileArgs {
    
    where?: Maybe<FileWhereInput>;
    
    orderBy?: Maybe<FileOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidateCoverLettersStringResolver<R = string[], Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateCoverLettersFileResolver<R = Maybe<File[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, CandidateCoverLettersFileArgs>;
  export interface CandidateCoverLettersFileArgs {
    
    where?: Maybe<FileWhereInput>;
    
    orderBy?: Maybe<FileOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidateTagsResolver<R = Maybe<Tag[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, CandidateTagsArgs>;
  export interface CandidateTagsArgs {
    
    where?: Maybe<TagWhereInput>;
    
    orderBy?: Maybe<TagOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidateSourcesResolver<R = Maybe<Source[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, CandidateSourcesArgs>;
  export interface CandidateSourcesArgs {
    
    where?: Maybe<SourceWhereInput>;
    
    orderBy?: Maybe<SourceOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidateFieldsResolver<R = Maybe<FieldInstance[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, CandidateFieldsArgs>;
  export interface CandidateFieldsArgs {
    
    where?: Maybe<FieldInstanceWhereInput>;
    
    orderBy?: Maybe<FieldInstanceOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidateTasksResolver<R = Maybe<Task[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, CandidateTasksArgs>;
  export interface CandidateTasksArgs {
    
    where?: Maybe<TaskWhereInput>;
    
    orderBy?: Maybe<TaskOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidateApplicationsResolver<R = Maybe<Application[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, CandidateApplicationsArgs>;
  export interface CandidateApplicationsArgs {
    
    where?: Maybe<ApplicationWhereInput>;
    
    orderBy?: Maybe<ApplicationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type CandidateCommentsResolver<R = Maybe<Comment[]>, Parent = Candidate, TContext = {}> = Resolver<R, Parent, TContext, CandidateCommentsArgs>;
  export interface CandidateCommentsArgs {
    
    where?: Maybe<CommentWhereInput>;
    
    orderBy?: Maybe<CommentOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }



  export interface FileResolvers<TContext = {}, TypeParent = File> {
    
    id?: FileIdResolver<string, TypeParent, TContext>;
    
    createdAt?: FileCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: FileUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    size?: FileSizeResolver<number, TypeParent, TContext>;
    
    type?: FileTypeResolver<string, TypeParent, TContext>;
    
    name?: FileNameResolver<string, TypeParent, TContext>;
    
    url?: FileUrlResolver<string, TypeParent, TContext>;
  }


  export type FileIdResolver<R = string, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FileCreatedAtResolver<R = DateTime, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FileUpdatedAtResolver<R = DateTime, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FileSizeResolver<R = number, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FileTypeResolver<R = string, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FileNameResolver<R = string, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FileUrlResolver<R = string, Parent = File, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface TagResolvers<TContext = {}, TypeParent = Tag> {
    
    id?: TagIdResolver<string, TypeParent, TContext>;
    
    createdAt?: TagCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: TagUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    label?: TagLabelResolver<string, TypeParent, TContext>;
    
    description?: TagDescriptionResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type TagIdResolver<R = string, Parent = Tag, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TagCreatedAtResolver<R = DateTime, Parent = Tag, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TagUpdatedAtResolver<R = DateTime, Parent = Tag, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TagLabelResolver<R = string, Parent = Tag, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TagDescriptionResolver<R = Maybe<string>, Parent = Tag, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface SourceResolvers<TContext = {}, TypeParent = Source> {
    
    id?: SourceIdResolver<string, TypeParent, TContext>;
    
    createdAt?: SourceCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: SourceUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    label?: SourceLabelResolver<string, TypeParent, TContext>;
    
    description?: SourceDescriptionResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type SourceIdResolver<R = string, Parent = Source, TContext = {}> = Resolver<R, Parent, TContext>;
  export type SourceCreatedAtResolver<R = DateTime, Parent = Source, TContext = {}> = Resolver<R, Parent, TContext>;
  export type SourceUpdatedAtResolver<R = DateTime, Parent = Source, TContext = {}> = Resolver<R, Parent, TContext>;
  export type SourceLabelResolver<R = string, Parent = Source, TContext = {}> = Resolver<R, Parent, TContext>;
  export type SourceDescriptionResolver<R = Maybe<string>, Parent = Source, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface FieldInstanceResolvers<TContext = {}, TypeParent = FieldInstance> {
    
    id?: FieldInstanceIdResolver<string, TypeParent, TContext>;
    
    createdAt?: FieldInstanceCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: FieldInstanceUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    field?: FieldInstanceFieldResolver<Field, TypeParent, TContext>;
    
    value?: FieldInstanceValueResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type FieldInstanceIdResolver<R = string, Parent = FieldInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldInstanceCreatedAtResolver<R = DateTime, Parent = FieldInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldInstanceUpdatedAtResolver<R = DateTime, Parent = FieldInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldInstanceFieldResolver<R = Field, Parent = FieldInstance, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldInstanceValueResolver<R = Maybe<string>, Parent = FieldInstance, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface FieldResolvers<TContext = {}, TypeParent = Field> {
    
    id?: FieldIdResolver<string, TypeParent, TContext>;
    
    createdAt?: FieldCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: FieldUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    type?: FieldTypeResolver<FieldType, TypeParent, TContext>;
    
    label?: FieldLabelResolver<string, TypeParent, TContext>;
    
    description?: FieldDescriptionResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type FieldIdResolver<R = string, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldCreatedAtResolver<R = DateTime, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldUpdatedAtResolver<R = DateTime, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldTypeResolver<R = FieldType, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldLabelResolver<R = string, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;
  export type FieldDescriptionResolver<R = Maybe<string>, Parent = Field, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface CommentResolvers<TContext = {}, TypeParent = Comment> {
    
    id?: CommentIdResolver<string, TypeParent, TContext>;
    
    createdAt?: CommentCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: CommentUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    createdBy?: CommentCreatedByResolver<User, TypeParent, TContext>;
    
    parent?: CommentParentResolver<Maybe<Comment>, TypeParent, TContext>;
    
    content?: CommentContentResolver<string, TypeParent, TContext>;
  }


  export type CommentIdResolver<R = string, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CommentCreatedAtResolver<R = DateTime, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CommentUpdatedAtResolver<R = DateTime, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CommentCreatedByResolver<R = User, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CommentParentResolver<R = Maybe<Comment>, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CommentContentResolver<R = string, Parent = Comment, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface StageResolvers<TContext = {}, TypeParent = Stage> {
    
    id?: StageIdResolver<string, TypeParent, TContext>;
    
    createdAt?: StageCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: StageUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    name?: StageNameResolver<string, TypeParent, TContext>;
    
    description?: StageDescriptionResolver<Maybe<string>, TypeParent, TContext>;
    
    type?: StageTypeResolver<StageType, TypeParent, TContext>;
  }


  export type StageIdResolver<R = string, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
  export type StageCreatedAtResolver<R = DateTime, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
  export type StageUpdatedAtResolver<R = DateTime, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
  export type StageNameResolver<R = string, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
  export type StageDescriptionResolver<R = Maybe<string>, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;
  export type StageTypeResolver<R = StageType, Parent = Stage, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface JobResolvers<TContext = {}, TypeParent = Job> {
    
    id?: JobIdResolver<string, TypeParent, TContext>;
    
    createdAt?: JobCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: JobUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    workspace?: JobWorkspaceResolver<Workspace, TypeParent, TContext>;
    
    applications?: JobApplicationsResolver<Maybe<Application[]>, TypeParent, TContext>;
    
    workflow?: JobWorkflowResolver<Workflow, TypeParent, TContext>;
    
    comments?: JobCommentsResolver<Maybe<Comment[]>, TypeParent, TContext>;
    
    type?: JobTypeResolver<JobType, TypeParent, TContext>;
    
    department?: JobDepartmentResolver<Maybe<string>, TypeParent, TContext>;
    
    locations?: JobLocationsResolver<Maybe<Location[]>, TypeParent, TContext>;
    
    name?: JobNameResolver<string, TypeParent, TContext>;
    
    excerpt?: JobExcerptResolver<Maybe<string>, TypeParent, TContext>;
    
    companyDescription?: JobCompanyDescriptionResolver<Maybe<string>, TypeParent, TContext>;
    
    description?: JobDescriptionResolver<Maybe<string>, TypeParent, TContext>;
    
    requirements?: JobRequirementsResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type JobIdResolver<R = string, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobCreatedAtResolver<R = DateTime, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobUpdatedAtResolver<R = DateTime, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobWorkspaceResolver<R = Workspace, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobApplicationsResolver<R = Maybe<Application[]>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext, JobApplicationsArgs>;
  export interface JobApplicationsArgs {
    
    where?: Maybe<ApplicationWhereInput>;
    
    orderBy?: Maybe<ApplicationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type JobWorkflowResolver<R = Workflow, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobCommentsResolver<R = Maybe<Comment[]>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext, JobCommentsArgs>;
  export interface JobCommentsArgs {
    
    where?: Maybe<CommentWhereInput>;
    
    orderBy?: Maybe<CommentOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type JobTypeResolver<R = JobType, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobDepartmentResolver<R = Maybe<string>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobLocationsResolver<R = Maybe<Location[]>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext, JobLocationsArgs>;
  export interface JobLocationsArgs {
    
    where?: Maybe<LocationWhereInput>;
    
    orderBy?: Maybe<LocationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type JobNameResolver<R = string, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobExcerptResolver<R = Maybe<string>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobCompanyDescriptionResolver<R = Maybe<string>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobDescriptionResolver<R = Maybe<string>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobRequirementsResolver<R = Maybe<string>, Parent = Job, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface WorkspaceResolvers<TContext = {}, TypeParent = Workspace> {
    
    id?: WorkspaceIdResolver<string, TypeParent, TContext>;
    
    createdAt?: WorkspaceCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: WorkspaceUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    users?: WorkspaceUsersResolver<Maybe<User[]>, TypeParent, TContext>;
    
    jobs?: WorkspaceJobsResolver<Maybe<Job[]>, TypeParent, TContext>;
    
    candidates?: WorkspaceCandidatesResolver<Maybe<Candidate[]>, TypeParent, TContext>;
    
    settings?: WorkspaceSettingsResolver<Maybe<Json>, TypeParent, TContext>;
    
    workflows?: WorkspaceWorkflowsResolver<Maybe<Workflow[]>, TypeParent, TContext>;
    
    invites?: WorkspaceInvitesResolver<Maybe<Invite[]>, TypeParent, TContext>;
    
    name?: WorkspaceNameResolver<string, TypeParent, TContext>;
  }


  export type WorkspaceIdResolver<R = string, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkspaceCreatedAtResolver<R = DateTime, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkspaceUpdatedAtResolver<R = DateTime, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkspaceUsersResolver<R = Maybe<User[]>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext, WorkspaceUsersArgs>;
  export interface WorkspaceUsersArgs {
    
    where?: Maybe<UserWhereInput>;
    
    orderBy?: Maybe<UserOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type WorkspaceJobsResolver<R = Maybe<Job[]>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext, WorkspaceJobsArgs>;
  export interface WorkspaceJobsArgs {
    
    where?: Maybe<JobWhereInput>;
    
    orderBy?: Maybe<JobOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type WorkspaceCandidatesResolver<R = Maybe<Candidate[]>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext, WorkspaceCandidatesArgs>;
  export interface WorkspaceCandidatesArgs {
    
    where?: Maybe<CandidateWhereInput>;
    
    orderBy?: Maybe<CandidateOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type WorkspaceSettingsResolver<R = Maybe<Json>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkspaceWorkflowsResolver<R = Maybe<Workflow[]>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext, WorkspaceWorkflowsArgs>;
  export interface WorkspaceWorkflowsArgs {
    
    where?: Maybe<WorkflowWhereInput>;
    
    orderBy?: Maybe<WorkflowOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type WorkspaceInvitesResolver<R = Maybe<Invite[]>, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext, WorkspaceInvitesArgs>;
  export interface WorkspaceInvitesArgs {
    
    where?: Maybe<InviteWhereInput>;
    
    orderBy?: Maybe<InviteOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type WorkspaceNameResolver<R = string, Parent = Workspace, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface WorkflowResolvers<TContext = {}, TypeParent = Workflow> {
    
    id?: WorkflowIdResolver<string, TypeParent, TContext>;
    
    createdAt?: WorkflowCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: WorkflowUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    name?: WorkflowNameResolver<string, TypeParent, TContext>;
    
    description?: WorkflowDescriptionResolver<Maybe<string>, TypeParent, TContext>;
    
    stages?: WorkflowStagesResolver<Maybe<Stage[]>, TypeParent, TContext>;
    
    disqualifications?: WorkflowDisqualificationsResolver<Maybe<Disqualification[]>, TypeParent, TContext>;
    
    fields?: WorkflowFieldsResolver<Maybe<Field[]>, TypeParent, TContext>;
  }


  export type WorkflowIdResolver<R = string, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkflowCreatedAtResolver<R = DateTime, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkflowUpdatedAtResolver<R = DateTime, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkflowNameResolver<R = string, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkflowDescriptionResolver<R = Maybe<string>, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext>;
  export type WorkflowStagesResolver<R = Maybe<Stage[]>, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext, WorkflowStagesArgs>;
  export interface WorkflowStagesArgs {
    
    where?: Maybe<StageWhereInput>;
    
    orderBy?: Maybe<StageOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type WorkflowDisqualificationsResolver<R = Maybe<Disqualification[]>, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext, WorkflowDisqualificationsArgs>;
  export interface WorkflowDisqualificationsArgs {
    
    where?: Maybe<DisqualificationWhereInput>;
    
    orderBy?: Maybe<DisqualificationOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }


  export type WorkflowFieldsResolver<R = Maybe<Field[]>, Parent = Workflow, TContext = {}> = Resolver<R, Parent, TContext, WorkflowFieldsArgs>;
  export interface WorkflowFieldsArgs {
    
    where?: Maybe<FieldWhereInput>;
    
    orderBy?: Maybe<FieldOrderByInput>;
    
    skip?: Maybe<number>;
    
    after?: Maybe<string>;
    
    before?: Maybe<string>;
    
    first?: Maybe<number>;
    
    last?: Maybe<number>;
  }



  export interface InviteResolvers<TContext = {}, TypeParent = Invite> {
    
    id?: InviteIdResolver<string, TypeParent, TContext>;
    
    createdAt?: InviteCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: InviteUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    email?: InviteEmailResolver<string, TypeParent, TContext>;
    
    expireAt?: InviteExpireAtResolver<DateTime, TypeParent, TContext>;
    
    invitedBy?: InviteInvitedByResolver<User, TypeParent, TContext>;
  }


  export type InviteIdResolver<R = string, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
  export type InviteCreatedAtResolver<R = DateTime, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
  export type InviteUpdatedAtResolver<R = DateTime, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
  export type InviteEmailResolver<R = string, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
  export type InviteExpireAtResolver<R = DateTime, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;
  export type InviteInvitedByResolver<R = User, Parent = Invite, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface LocationResolvers<TContext = {}, TypeParent = Location> {
    
    id?: LocationIdResolver<string, TypeParent, TContext>;
    
    createdAt?: LocationCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    updatedAt?: LocationUpdatedAtResolver<DateTime, TypeParent, TContext>;
    
    country?: LocationCountryResolver<string, TypeParent, TContext>;
    
    region?: LocationRegionResolver<Maybe<string>, TypeParent, TContext>;
    
    city?: LocationCityResolver<string, TypeParent, TContext>;
    
    zip?: LocationZipResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type LocationIdResolver<R = string, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LocationCreatedAtResolver<R = DateTime, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LocationUpdatedAtResolver<R = DateTime, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LocationCountryResolver<R = string, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LocationRegionResolver<R = Maybe<string>, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LocationCityResolver<R = string, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LocationZipResolver<R = Maybe<string>, Parent = Location, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface ApplicationConnectionResolvers<TContext = {}, TypeParent = ApplicationConnection> {
    
    pageInfo?: ApplicationConnectionPageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: ApplicationConnectionEdgesResolver<(Maybe<ApplicationEdge>)[], TypeParent, TContext>;
    
    aggregate?: ApplicationConnectionAggregateResolver<AggregateApplication, TypeParent, TContext>;
  }


  export type ApplicationConnectionPageInfoResolver<R = PageInfo, Parent = ApplicationConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationConnectionEdgesResolver<R = (Maybe<ApplicationEdge>)[], Parent = ApplicationConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationConnectionAggregateResolver<R = AggregateApplication, Parent = ApplicationConnection, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface PageInfoResolvers<TContext = {}, TypeParent = PageInfo> {
    
    hasNextPage?: PageInfoHasNextPageResolver<boolean, TypeParent, TContext>;
    
    hasPreviousPage?: PageInfoHasPreviousPageResolver<boolean, TypeParent, TContext>;
    
    startCursor?: PageInfoStartCursorResolver<Maybe<string>, TypeParent, TContext>;
    
    endCursor?: PageInfoEndCursorResolver<Maybe<string>, TypeParent, TContext>;
  }


  export type PageInfoHasNextPageResolver<R = boolean, Parent = PageInfo, TContext = {}> = Resolver<R, Parent, TContext>;
  export type PageInfoHasPreviousPageResolver<R = boolean, Parent = PageInfo, TContext = {}> = Resolver<R, Parent, TContext>;
  export type PageInfoStartCursorResolver<R = Maybe<string>, Parent = PageInfo, TContext = {}> = Resolver<R, Parent, TContext>;
  export type PageInfoEndCursorResolver<R = Maybe<string>, Parent = PageInfo, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface ApplicationEdgeResolvers<TContext = {}, TypeParent = ApplicationEdge> {
    
    node?: ApplicationEdgeNodeResolver<Application, TypeParent, TContext>;
    
    cursor?: ApplicationEdgeCursorResolver<string, TypeParent, TContext>;
  }


  export type ApplicationEdgeNodeResolver<R = Application, Parent = ApplicationEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ApplicationEdgeCursorResolver<R = string, Parent = ApplicationEdge, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface AggregateApplicationResolvers<TContext = {}, TypeParent = AggregateApplication> {
    
    count?: AggregateApplicationCountResolver<number, TypeParent, TContext>;
  }


  export type AggregateApplicationCountResolver<R = number, Parent = AggregateApplication, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface CandidateConnectionResolvers<TContext = {}, TypeParent = CandidateConnection> {
    
    pageInfo?: CandidateConnectionPageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: CandidateConnectionEdgesResolver<(Maybe<CandidateEdge>)[], TypeParent, TContext>;
    
    aggregate?: CandidateConnectionAggregateResolver<AggregateCandidate, TypeParent, TContext>;
  }


  export type CandidateConnectionPageInfoResolver<R = PageInfo, Parent = CandidateConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateConnectionEdgesResolver<R = (Maybe<CandidateEdge>)[], Parent = CandidateConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateConnectionAggregateResolver<R = AggregateCandidate, Parent = CandidateConnection, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface CandidateEdgeResolvers<TContext = {}, TypeParent = CandidateEdge> {
    
    node?: CandidateEdgeNodeResolver<Candidate, TypeParent, TContext>;
    
    cursor?: CandidateEdgeCursorResolver<string, TypeParent, TContext>;
  }


  export type CandidateEdgeNodeResolver<R = Candidate, Parent = CandidateEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type CandidateEdgeCursorResolver<R = string, Parent = CandidateEdge, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface AggregateCandidateResolvers<TContext = {}, TypeParent = AggregateCandidate> {
    
    count?: AggregateCandidateCountResolver<number, TypeParent, TContext>;
  }


  export type AggregateCandidateCountResolver<R = number, Parent = AggregateCandidate, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface JobConnectionResolvers<TContext = {}, TypeParent = JobConnection> {
    
    pageInfo?: JobConnectionPageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: JobConnectionEdgesResolver<(Maybe<JobEdge>)[], TypeParent, TContext>;
    
    aggregate?: JobConnectionAggregateResolver<AggregateJob, TypeParent, TContext>;
  }


  export type JobConnectionPageInfoResolver<R = PageInfo, Parent = JobConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobConnectionEdgesResolver<R = (Maybe<JobEdge>)[], Parent = JobConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobConnectionAggregateResolver<R = AggregateJob, Parent = JobConnection, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface JobEdgeResolvers<TContext = {}, TypeParent = JobEdge> {
    
    node?: JobEdgeNodeResolver<Job, TypeParent, TContext>;
    
    cursor?: JobEdgeCursorResolver<string, TypeParent, TContext>;
  }


  export type JobEdgeNodeResolver<R = Job, Parent = JobEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type JobEdgeCursorResolver<R = string, Parent = JobEdge, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface AggregateJobResolvers<TContext = {}, TypeParent = AggregateJob> {
    
    count?: AggregateJobCountResolver<number, TypeParent, TContext>;
  }


  export type AggregateJobCountResolver<R = number, Parent = AggregateJob, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface SourceConnectionResolvers<TContext = {}, TypeParent = SourceConnection> {
    
    pageInfo?: SourceConnectionPageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: SourceConnectionEdgesResolver<(Maybe<SourceEdge>)[], TypeParent, TContext>;
    
    aggregate?: SourceConnectionAggregateResolver<AggregateSource, TypeParent, TContext>;
  }


  export type SourceConnectionPageInfoResolver<R = PageInfo, Parent = SourceConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type SourceConnectionEdgesResolver<R = (Maybe<SourceEdge>)[], Parent = SourceConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type SourceConnectionAggregateResolver<R = AggregateSource, Parent = SourceConnection, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface SourceEdgeResolvers<TContext = {}, TypeParent = SourceEdge> {
    
    node?: SourceEdgeNodeResolver<Source, TypeParent, TContext>;
    
    cursor?: SourceEdgeCursorResolver<string, TypeParent, TContext>;
  }


  export type SourceEdgeNodeResolver<R = Source, Parent = SourceEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type SourceEdgeCursorResolver<R = string, Parent = SourceEdge, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface AggregateSourceResolvers<TContext = {}, TypeParent = AggregateSource> {
    
    count?: AggregateSourceCountResolver<number, TypeParent, TContext>;
  }


  export type AggregateSourceCountResolver<R = number, Parent = AggregateSource, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface TagConnectionResolvers<TContext = {}, TypeParent = TagConnection> {
    
    pageInfo?: TagConnectionPageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: TagConnectionEdgesResolver<(Maybe<TagEdge>)[], TypeParent, TContext>;
    
    aggregate?: TagConnectionAggregateResolver<AggregateTag, TypeParent, TContext>;
  }


  export type TagConnectionPageInfoResolver<R = PageInfo, Parent = TagConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TagConnectionEdgesResolver<R = (Maybe<TagEdge>)[], Parent = TagConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TagConnectionAggregateResolver<R = AggregateTag, Parent = TagConnection, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface TagEdgeResolvers<TContext = {}, TypeParent = TagEdge> {
    
    node?: TagEdgeNodeResolver<Tag, TypeParent, TContext>;
    
    cursor?: TagEdgeCursorResolver<string, TypeParent, TContext>;
  }


  export type TagEdgeNodeResolver<R = Tag, Parent = TagEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TagEdgeCursorResolver<R = string, Parent = TagEdge, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface AggregateTagResolvers<TContext = {}, TypeParent = AggregateTag> {
    
    count?: AggregateTagCountResolver<number, TypeParent, TContext>;
  }


  export type AggregateTagCountResolver<R = number, Parent = AggregateTag, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface TaskConnectionResolvers<TContext = {}, TypeParent = TaskConnection> {
    
    pageInfo?: TaskConnectionPageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: TaskConnectionEdgesResolver<(Maybe<TaskEdge>)[], TypeParent, TContext>;
    
    aggregate?: TaskConnectionAggregateResolver<AggregateTask, TypeParent, TContext>;
  }


  export type TaskConnectionPageInfoResolver<R = PageInfo, Parent = TaskConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TaskConnectionEdgesResolver<R = (Maybe<TaskEdge>)[], Parent = TaskConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TaskConnectionAggregateResolver<R = AggregateTask, Parent = TaskConnection, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface TaskEdgeResolvers<TContext = {}, TypeParent = TaskEdge> {
    
    node?: TaskEdgeNodeResolver<Task, TypeParent, TContext>;
    
    cursor?: TaskEdgeCursorResolver<string, TypeParent, TContext>;
  }


  export type TaskEdgeNodeResolver<R = Task, Parent = TaskEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type TaskEdgeCursorResolver<R = string, Parent = TaskEdge, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface AggregateTaskResolvers<TContext = {}, TypeParent = AggregateTask> {
    
    count?: AggregateTaskCountResolver<number, TypeParent, TContext>;
  }


  export type AggregateTaskCountResolver<R = number, Parent = AggregateTask, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface UserConnectionResolvers<TContext = {}, TypeParent = UserConnection> {
    
    pageInfo?: UserConnectionPageInfoResolver<PageInfo, TypeParent, TContext>;
    
    edges?: UserConnectionEdgesResolver<(Maybe<UserEdge>)[], TypeParent, TContext>;
    
    aggregate?: UserConnectionAggregateResolver<AggregateUser, TypeParent, TContext>;
  }


  export type UserConnectionPageInfoResolver<R = PageInfo, Parent = UserConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserConnectionEdgesResolver<R = (Maybe<UserEdge>)[], Parent = UserConnection, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserConnectionAggregateResolver<R = AggregateUser, Parent = UserConnection, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface UserEdgeResolvers<TContext = {}, TypeParent = UserEdge> {
    
    node?: UserEdgeNodeResolver<User, TypeParent, TContext>;
    
    cursor?: UserEdgeCursorResolver<string, TypeParent, TContext>;
  }


  export type UserEdgeNodeResolver<R = User, Parent = UserEdge, TContext = {}> = Resolver<R, Parent, TContext>;
  export type UserEdgeCursorResolver<R = string, Parent = UserEdge, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface AggregateUserResolvers<TContext = {}, TypeParent = AggregateUser> {
    
    count?: AggregateUserCountResolver<number, TypeParent, TContext>;
  }


  export type AggregateUserCountResolver<R = number, Parent = AggregateUser, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface LocalTypeResolvers<TContext = {}, TypeParent = LocalType> {
    
    id?: LocalTypeIdResolver<string, TypeParent, TContext>;
    
    name?: LocalTypeNameResolver<string, TypeParent, TContext>;
  }


  export type LocalTypeIdResolver<R = string, Parent = LocalType, TContext = {}> = Resolver<R, Parent, TContext>;
  export type LocalTypeNameResolver<R = string, Parent = LocalType, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface ToastResolvers<TContext = {}, TypeParent = Toast> {
    
    id?: ToastIdResolver<string, TypeParent, TContext>;
    
    createdAt?: ToastCreatedAtResolver<DateTime, TypeParent, TContext>;
    
    message?: ToastMessageResolver<string, TypeParent, TContext>;
    
    type?: ToastTypeResolver<ToastType, TypeParent, TContext>;
  }


  export type ToastIdResolver<R = string, Parent = Toast, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ToastCreatedAtResolver<R = DateTime, Parent = Toast, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ToastMessageResolver<R = string, Parent = Toast, TContext = {}> = Resolver<R, Parent, TContext>;
  export type ToastTypeResolver<R = ToastType, Parent = Toast, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface MutationResolvers<TContext = {}, TypeParent = {}> {
    
    createApplication?: MutationCreateApplicationResolver<Application, TypeParent, TContext>;
    
    updateApplication?: MutationUpdateApplicationResolver<Maybe<Application>, TypeParent, TContext>;
    
    updateManyApplications?: MutationUpdateManyApplicationsResolver<BatchPayload, TypeParent, TContext>;
    
    upsertApplication?: MutationUpsertApplicationResolver<Application, TypeParent, TContext>;
    
    deleteApplication?: MutationDeleteApplicationResolver<Maybe<Application>, TypeParent, TContext>;
    
    deleteManyApplications?: MutationDeleteManyApplicationsResolver<BatchPayload, TypeParent, TContext>;
    
    createCandidate?: MutationCreateCandidateResolver<Candidate, TypeParent, TContext>;
    
    updateCandidate?: MutationUpdateCandidateResolver<Maybe<Candidate>, TypeParent, TContext>;
    
    updateManyCandidates?: MutationUpdateManyCandidatesResolver<BatchPayload, TypeParent, TContext>;
    
    upsertCandidate?: MutationUpsertCandidateResolver<Candidate, TypeParent, TContext>;
    
    deleteCandidate?: MutationDeleteCandidateResolver<Maybe<Candidate>, TypeParent, TContext>;
    
    deleteManyCandidates?: MutationDeleteManyCandidatesResolver<BatchPayload, TypeParent, TContext>;
    
    createJob?: MutationCreateJobResolver<Job, TypeParent, TContext>;
    
    updateJob?: MutationUpdateJobResolver<Maybe<Job>, TypeParent, TContext>;
    
    updateManyJobs?: MutationUpdateManyJobsResolver<BatchPayload, TypeParent, TContext>;
    
    upsertJob?: MutationUpsertJobResolver<Job, TypeParent, TContext>;
    
    deleteJob?: MutationDeleteJobResolver<Maybe<Job>, TypeParent, TContext>;
    
    deleteManyJobs?: MutationDeleteManyJobsResolver<BatchPayload, TypeParent, TContext>;
    
    createSource?: MutationCreateSourceResolver<Source, TypeParent, TContext>;
    
    updateSource?: MutationUpdateSourceResolver<Maybe<Source>, TypeParent, TContext>;
    
    updateManySources?: MutationUpdateManySourcesResolver<BatchPayload, TypeParent, TContext>;
    
    upsertSource?: MutationUpsertSourceResolver<Source, TypeParent, TContext>;
    
    deleteSource?: MutationDeleteSourceResolver<Maybe<Source>, TypeParent, TContext>;
    
    deleteManySources?: MutationDeleteManySourcesResolver<BatchPayload, TypeParent, TContext>;
    
    createTag?: MutationCreateTagResolver<Tag, TypeParent, TContext>;
    
    updateTag?: MutationUpdateTagResolver<Maybe<Tag>, TypeParent, TContext>;
    
    updateManyTags?: MutationUpdateManyTagsResolver<BatchPayload, TypeParent, TContext>;
    
    upsertTag?: MutationUpsertTagResolver<Tag, TypeParent, TContext>;
    
    deleteTag?: MutationDeleteTagResolver<Maybe<Tag>, TypeParent, TContext>;
    
    deleteManyTags?: MutationDeleteManyTagsResolver<BatchPayload, TypeParent, TContext>;
    
    createTask?: MutationCreateTaskResolver<Task, TypeParent, TContext>;
    
    updateTask?: MutationUpdateTaskResolver<Maybe<Task>, TypeParent, TContext>;
    
    updateManyTasks?: MutationUpdateManyTasksResolver<BatchPayload, TypeParent, TContext>;
    
    upsertTask?: MutationUpsertTaskResolver<Task, TypeParent, TContext>;
    
    deleteTask?: MutationDeleteTaskResolver<Maybe<Task>, TypeParent, TContext>;
    
    deleteManyTasks?: MutationDeleteManyTasksResolver<BatchPayload, TypeParent, TContext>;
    
    createToast?: MutationCreateToastResolver<Toast, TypeParent, TContext>;
  }


  export type MutationCreateApplicationResolver<R = Application, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationCreateApplicationArgs>;
  export interface MutationCreateApplicationArgs {
    
    data: ApplicationCreateInput;
  }


  export type MutationUpdateApplicationResolver<R = Maybe<Application>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateApplicationArgs>;
  export interface MutationUpdateApplicationArgs {
    
    data: ApplicationUpdateInput;
    
    where: ApplicationWhereUniqueInput;
  }


  export type MutationUpdateManyApplicationsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateManyApplicationsArgs>;
  export interface MutationUpdateManyApplicationsArgs {
    
    data: ApplicationUpdateManyMutationInput;
    
    where?: Maybe<ApplicationWhereInput>;
  }


  export type MutationUpsertApplicationResolver<R = Application, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpsertApplicationArgs>;
  export interface MutationUpsertApplicationArgs {
    
    where: ApplicationWhereUniqueInput;
    
    create: ApplicationCreateInput;
    
    update: ApplicationUpdateInput;
  }


  export type MutationDeleteApplicationResolver<R = Maybe<Application>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteApplicationArgs>;
  export interface MutationDeleteApplicationArgs {
    
    where: ApplicationWhereUniqueInput;
  }


  export type MutationDeleteManyApplicationsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteManyApplicationsArgs>;
  export interface MutationDeleteManyApplicationsArgs {
    
    where?: Maybe<ApplicationWhereInput>;
  }


  export type MutationCreateCandidateResolver<R = Candidate, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationCreateCandidateArgs>;
  export interface MutationCreateCandidateArgs {
    
    data: CandidateCreateInput;
  }


  export type MutationUpdateCandidateResolver<R = Maybe<Candidate>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateCandidateArgs>;
  export interface MutationUpdateCandidateArgs {
    
    data: CandidateUpdateInput;
    
    where: CandidateWhereUniqueInput;
  }


  export type MutationUpdateManyCandidatesResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateManyCandidatesArgs>;
  export interface MutationUpdateManyCandidatesArgs {
    
    data: CandidateUpdateManyMutationInput;
    
    where?: Maybe<CandidateWhereInput>;
  }


  export type MutationUpsertCandidateResolver<R = Candidate, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpsertCandidateArgs>;
  export interface MutationUpsertCandidateArgs {
    
    where: CandidateWhereUniqueInput;
    
    create: CandidateCreateInput;
    
    update: CandidateUpdateInput;
  }


  export type MutationDeleteCandidateResolver<R = Maybe<Candidate>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteCandidateArgs>;
  export interface MutationDeleteCandidateArgs {
    
    where: CandidateWhereUniqueInput;
  }


  export type MutationDeleteManyCandidatesResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteManyCandidatesArgs>;
  export interface MutationDeleteManyCandidatesArgs {
    
    where?: Maybe<CandidateWhereInput>;
  }


  export type MutationCreateJobResolver<R = Job, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationCreateJobArgs>;
  export interface MutationCreateJobArgs {
    
    data: JobCreateInput;
  }


  export type MutationUpdateJobResolver<R = Maybe<Job>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateJobArgs>;
  export interface MutationUpdateJobArgs {
    
    data: JobUpdateInput;
    
    where: JobWhereUniqueInput;
  }


  export type MutationUpdateManyJobsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateManyJobsArgs>;
  export interface MutationUpdateManyJobsArgs {
    
    data: JobUpdateManyMutationInput;
    
    where?: Maybe<JobWhereInput>;
  }


  export type MutationUpsertJobResolver<R = Job, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpsertJobArgs>;
  export interface MutationUpsertJobArgs {
    
    where: JobWhereUniqueInput;
    
    create: JobCreateInput;
    
    update: JobUpdateInput;
  }


  export type MutationDeleteJobResolver<R = Maybe<Job>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteJobArgs>;
  export interface MutationDeleteJobArgs {
    
    where: JobWhereUniqueInput;
  }


  export type MutationDeleteManyJobsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteManyJobsArgs>;
  export interface MutationDeleteManyJobsArgs {
    
    where?: Maybe<JobWhereInput>;
  }


  export type MutationCreateSourceResolver<R = Source, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationCreateSourceArgs>;
  export interface MutationCreateSourceArgs {
    
    data: SourceCreateInput;
  }


  export type MutationUpdateSourceResolver<R = Maybe<Source>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateSourceArgs>;
  export interface MutationUpdateSourceArgs {
    
    data: SourceUpdateInput;
    
    where: SourceWhereUniqueInput;
  }


  export type MutationUpdateManySourcesResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateManySourcesArgs>;
  export interface MutationUpdateManySourcesArgs {
    
    data: SourceUpdateManyMutationInput;
    
    where?: Maybe<SourceWhereInput>;
  }


  export type MutationUpsertSourceResolver<R = Source, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpsertSourceArgs>;
  export interface MutationUpsertSourceArgs {
    
    where: SourceWhereUniqueInput;
    
    create: SourceCreateInput;
    
    update: SourceUpdateInput;
  }


  export type MutationDeleteSourceResolver<R = Maybe<Source>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteSourceArgs>;
  export interface MutationDeleteSourceArgs {
    
    where: SourceWhereUniqueInput;
  }


  export type MutationDeleteManySourcesResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteManySourcesArgs>;
  export interface MutationDeleteManySourcesArgs {
    
    where?: Maybe<SourceWhereInput>;
  }


  export type MutationCreateTagResolver<R = Tag, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationCreateTagArgs>;
  export interface MutationCreateTagArgs {
    
    data: TagCreateInput;
  }


  export type MutationUpdateTagResolver<R = Maybe<Tag>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateTagArgs>;
  export interface MutationUpdateTagArgs {
    
    data: TagUpdateInput;
    
    where: TagWhereUniqueInput;
  }


  export type MutationUpdateManyTagsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateManyTagsArgs>;
  export interface MutationUpdateManyTagsArgs {
    
    data: TagUpdateManyMutationInput;
    
    where?: Maybe<TagWhereInput>;
  }


  export type MutationUpsertTagResolver<R = Tag, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpsertTagArgs>;
  export interface MutationUpsertTagArgs {
    
    where: TagWhereUniqueInput;
    
    create: TagCreateInput;
    
    update: TagUpdateInput;
  }


  export type MutationDeleteTagResolver<R = Maybe<Tag>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteTagArgs>;
  export interface MutationDeleteTagArgs {
    
    where: TagWhereUniqueInput;
  }


  export type MutationDeleteManyTagsResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteManyTagsArgs>;
  export interface MutationDeleteManyTagsArgs {
    
    where?: Maybe<TagWhereInput>;
  }


  export type MutationCreateTaskResolver<R = Task, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationCreateTaskArgs>;
  export interface MutationCreateTaskArgs {
    
    data: TaskCreateInput;
  }


  export type MutationUpdateTaskResolver<R = Maybe<Task>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateTaskArgs>;
  export interface MutationUpdateTaskArgs {
    
    data: TaskUpdateInput;
    
    where: TaskWhereUniqueInput;
  }


  export type MutationUpdateManyTasksResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpdateManyTasksArgs>;
  export interface MutationUpdateManyTasksArgs {
    
    data: TaskUpdateManyMutationInput;
    
    where?: Maybe<TaskWhereInput>;
  }


  export type MutationUpsertTaskResolver<R = Task, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationUpsertTaskArgs>;
  export interface MutationUpsertTaskArgs {
    
    where: TaskWhereUniqueInput;
    
    create: TaskCreateInput;
    
    update: TaskUpdateInput;
  }


  export type MutationDeleteTaskResolver<R = Maybe<Task>, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteTaskArgs>;
  export interface MutationDeleteTaskArgs {
    
    where: TaskWhereUniqueInput;
  }


  export type MutationDeleteManyTasksResolver<R = BatchPayload, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationDeleteManyTasksArgs>;
  export interface MutationDeleteManyTasksArgs {
    
    where?: Maybe<TaskWhereInput>;
  }


  export type MutationCreateToastResolver<R = Toast, Parent = {}, TContext = {}> = Resolver<R, Parent, TContext, MutationCreateToastArgs>;
  export interface MutationCreateToastArgs {
    
    data: ToastInput;
  }



  export interface BatchPayloadResolvers<TContext = {}, TypeParent = BatchPayload> {
    
    count?: BatchPayloadCountResolver<Long, TypeParent, TContext>;
  }


  export type BatchPayloadCountResolver<R = Long, Parent = BatchPayload, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface AuthPayloadResolvers<TContext = {}, TypeParent = AuthPayload> {
    
    token?: AuthPayloadTokenResolver<string, TypeParent, TContext>;
    
    refresh?: AuthPayloadRefreshResolver<string, TypeParent, TContext>;
  }


  export type AuthPayloadTokenResolver<R = string, Parent = AuthPayload, TContext = {}> = Resolver<R, Parent, TContext>;
  export type AuthPayloadRefreshResolver<R = string, Parent = AuthPayload, TContext = {}> = Resolver<R, Parent, TContext>;

  export interface AccessPayloadResolvers<TContext = {}, TypeParent = AccessPayload> {
    
    token?: AccessPayloadTokenResolver<string, TypeParent, TContext>;
  }


  export type AccessPayloadTokenResolver<R = string, Parent = AccessPayload, TContext = {}> = Resolver<R, Parent, TContext>;



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
    Query?: QueryResolvers<TContext>;
    Application?: ApplicationResolvers<TContext>;
    DisqualificationInstance?: DisqualificationInstanceResolvers<TContext>;
    Disqualification?: DisqualificationResolvers<TContext>;
    User?: UserResolvers<TContext>;
    Task?: TaskResolvers<TContext>;
    Candidate?: CandidateResolvers<TContext>;
    File?: FileResolvers<TContext>;
    Tag?: TagResolvers<TContext>;
    Source?: SourceResolvers<TContext>;
    FieldInstance?: FieldInstanceResolvers<TContext>;
    Field?: FieldResolvers<TContext>;
    Comment?: CommentResolvers<TContext>;
    Stage?: StageResolvers<TContext>;
    Job?: JobResolvers<TContext>;
    Workspace?: WorkspaceResolvers<TContext>;
    Workflow?: WorkflowResolvers<TContext>;
    Invite?: InviteResolvers<TContext>;
    Location?: LocationResolvers<TContext>;
    ApplicationConnection?: ApplicationConnectionResolvers<TContext>;
    PageInfo?: PageInfoResolvers<TContext>;
    ApplicationEdge?: ApplicationEdgeResolvers<TContext>;
    AggregateApplication?: AggregateApplicationResolvers<TContext>;
    CandidateConnection?: CandidateConnectionResolvers<TContext>;
    CandidateEdge?: CandidateEdgeResolvers<TContext>;
    AggregateCandidate?: AggregateCandidateResolvers<TContext>;
    JobConnection?: JobConnectionResolvers<TContext>;
    JobEdge?: JobEdgeResolvers<TContext>;
    AggregateJob?: AggregateJobResolvers<TContext>;
    SourceConnection?: SourceConnectionResolvers<TContext>;
    SourceEdge?: SourceEdgeResolvers<TContext>;
    AggregateSource?: AggregateSourceResolvers<TContext>;
    TagConnection?: TagConnectionResolvers<TContext>;
    TagEdge?: TagEdgeResolvers<TContext>;
    AggregateTag?: AggregateTagResolvers<TContext>;
    TaskConnection?: TaskConnectionResolvers<TContext>;
    TaskEdge?: TaskEdgeResolvers<TContext>;
    AggregateTask?: AggregateTaskResolvers<TContext>;
    UserConnection?: UserConnectionResolvers<TContext>;
    UserEdge?: UserEdgeResolvers<TContext>;
    AggregateUser?: AggregateUserResolvers<TContext>;
    LocalType?: LocalTypeResolvers<TContext>;
    Toast?: ToastResolvers<TContext>;
    Mutation?: MutationResolvers<TContext>;
    BatchPayload?: BatchPayloadResolvers<TContext>;
    AuthPayload?: AuthPayloadResolvers<TContext>;
    AccessPayload?: AccessPayloadResolvers<TContext>;
    DateTime?: GraphQLScalarType;
    Json?: GraphQLScalarType;
    Long?: GraphQLScalarType;
} & { [typeName: string] : never };

export type IDirectiveResolvers<Result> = {
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string] : never };
