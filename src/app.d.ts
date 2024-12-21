// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}
	}
}

export {};

export interface ApiResponse {
	DomainsList: DomainsList;
	AccountsCreate: AccountsCreate;
	TokenCreate: TokenCreate;
	MailList: MailList;
	MeInfo: MeInfo;
}

interface DomainsList {
	'@context': string;
	'@id': string;
	'@type': string;
	'hydra:totalItems': number;
	'hydra:member': HydraMember[];
}

interface HydraMember {
	'@id': string;
	'@type': string;
	id: string;
	domain: string;
	isActive: boolean;
	isPrivate: boolean;
	createdAt: Date;
	updatedAt: Date;
}

interface AccountsCreate {
	'@context': string;
	'@id': string;
	'@type': string;
	id: string;
	address: string;
	quota: number;
	used: number;
	isDisabled: boolean;
	isDeleted: boolean;
	createdAt: Date;
	updatedAt: Date;
}

interface TokenCreate {
	token: string;
	'@id': string;
	id: string;
}

interface MailList {
	'hydra:member': HydraMember[];
	'hydra:totalItems': number;
	'hydra:view': HydraView;
	'hydra:search': HydraSearch;
}

export interface HydraMember {
	'@id': string;
	'@type': string;
	'@context': string;
	id: string;
	accountId: string;
	msgid: string;
	from: From;
	to: From[];
	subject: string;
	intro: string;
	seen: boolean;
	isDeleted: boolean;
	hasAttachments: boolean;
	size: number;
	downloadUrl: string;
	createdAt: Date;
	updatedAt: Date;
}

interface From {
	name: string;
	address: string;
}

interface HydraSearch {
	'@type': string;
	'hydra:template': string;
	'hydra:variableRepresentation': string;
	'hydra:mapping': HydraMapping[];
}

interface HydraMapping {
	'@type': string;
	variable: string;
	property: string;
	required: boolean;
}

interface HydraView {
	'@id': string;
	'@type': string;
	'hydra:first': string;
	'hydra:last': string;
	'hydra:previous': string;
	'hydra:next': string;
}

interface MeInfo {
	'@context': string;
	'@id': string;
	'@type': string;
	id: string;
	address: string;
	quota: number;
	used: number;
	isDisabled: boolean;
	isDeleted: boolean;
	createdAt: Date;
	updatedAt: Date;
}