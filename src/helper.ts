export const getText = (companyInformation: string, copyrightText: string) => copyrightText.replace('$company', companyInformation);

// @name isTargetFile
// @desc Filter function to remove files that user wants to ignore.
// @param ignoreTokens An array of strings to ignore in filepaths.
export const isTargetFile = (ignoreTokens: any) => {
    console.log("-==", ignoreTokens);
    return function(file: any) {
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