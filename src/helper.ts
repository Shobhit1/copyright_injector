const templateObject: { [key: string]: string; }  = {
    'javascript': '// Copyright (c) $company. All rights reserved.\n// Licensed under the MIT license.\n\n',
    'html': '<!-- Copyright (c) $company. All rights reserved.\nLicensed under the MIT license. -->\n\n',
    'typescript': '// Copyright (c) $company. All rights reserved.\n// Licensed under the MIT license.\n\n',
    'typescriptreact': '// Copyright (c) $company. All rights reserved.\n// Licensed under the MIT license.\n\n',
};

export const isTargetFile = (ignoreTokens: any) => {
    return (file: any) => {
        if (ignoreTokens.length === 0) {
            return true;
        }

        for (var i = 0; i < ignoreTokens.length; i++) {
            if (file.path.indexOf(ignoreTokens[i]) > -1) {
                return false;
            }
        }

        return true;
    };
};

export const getCopyrightTemplate = (languageId: string) => templateObject[languageId];

export const getText = (companyInformation: string, languageId: string) => {
    const copyrightTextTemplate: string = getCopyrightTemplate(languageId);
    if (!copyrightTextTemplate) {
        return undefined;
    }
    return copyrightTextTemplate.replace('$company', companyInformation);
};


