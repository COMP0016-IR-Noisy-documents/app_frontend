//backend -> frontend code type
function getFileType(type) {
    switch (type) {
        case "rm":
        case "mp4":
        case "m4v":
        case "mov":
        case "avi":
        case "mpg":
        case "mpeg":
        case "divx":
            return "video";
        case "ods":
        case "xls":
        case "xlsx":
            return "spreadsheet";
        case "mp3":
            return "audio"
        case "pptx":
            return "presentation";
        case "xml":
        case "html":
            return "code";
        case "docx":
        case "odt":
        case "rtf":
        case "txt":
        case "pdf":   
        default:
            return "document";
    }
}

//frontend type to backend code type
function inverseFileType(type) {
    switch (type) {
        case "video":
            return ["rm", "mp4", "mv4", "mov", "avi", "mpg", "mpeg", "divx"];
        case "spreadsheet":
            return ["ods", "xls", "xlsx"];
        case "audio":
            return ["mp3"];
        case "presentation":
            return ["pptx"];
        case "code":
            return ["xml", "html"];
        case "document":
        default:
            return ["docx", "odt", "rtf", "txt", "pdf"];
    }
}

//backend -> frontend language type
function getLanguage(type) {
    let result = "";

    switch (type) {
        case "en":
            result = "English";
            break;
        case "sl":
            result = "Slovenian";
            break;
        case "de":
            result = "German";
            break;
        case "pt":
            result = "Portuguese";
            break;
        case "es":
            result = "Spanish";
            break;
        case "fr":
            result = "French";
            break;
        case "ca":
            result = "Catalan";
            break;
        case "it":
            result = "Italian";
            break;
        default:
            result = "";
    }

    return result;
}

//backend -> frontend language type
function inverseLanguageType(type) {

    switch (type) {
        case "English":
            return "en";
        case "Slovenian":
            return "sl";
        case "German":
            return "de";
        case "Portuguese":
            return "pt";
        case "Spanish":
            return "es";
        case "French":
            return "fr";
        case "Catalan":
            return "ca";
        case "Italian":
        default:
            return "it";
    }
}

function typeToCode(fileArray) {
    let fileCode = [];
    for (let i =0; i < fileArray.length; i ++) {
        fileCode = fileCode.concat(inverseFileType(fileArray[i]));
    }
    return fileCode;
}

function langToCode(fileArray) {
    let langCode = [];
    for (let i = 0; i < fileArray.length; i ++) {
        langCode = langCode.concat(inverseLanguageType(fileArray[i]));
    }
    return langCode;
}

export default getFileType;
export { getFileType, getLanguage, typeToCode, langToCode };