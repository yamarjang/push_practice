/// <reference types="vscode-languageclient/typings/vscode-proposed" />
/// <reference types="vscode-languageclient/lib/common/client" />
import { WorkspaceEdit, ExtensionContext } from 'vscode';
import { CodeAction, TextDocumentIdentifier, LanguageClientOptions } from 'vscode-languageclient';
import { LanguageClient, ServerOptions } from 'vscode-languageclient/node';
export declare function isDebugOrTestSession(): boolean;
export declare function checkForOtherPrismaExtension(): void;
export declare function checkForMinimalColorTheme(): void;
export declare function isSnippetEdit(action: CodeAction, document: TextDocumentIdentifier): boolean;
export declare function applySnippetWorkspaceEdit(): (edit: WorkspaceEdit) => Promise<void>;
export declare function createLanguageServer(serverOptions: ServerOptions, clientOptions: LanguageClientOptions): LanguageClient;
export declare const restartClient: (context: ExtensionContext, client: LanguageClient, serverOptions: ServerOptions, clientOptions: LanguageClientOptions) => Promise<LanguageClient>;
