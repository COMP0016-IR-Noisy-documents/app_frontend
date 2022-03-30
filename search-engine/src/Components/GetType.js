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
            return "Video";
        case "ods":
        case "xls":
        case "xlsx":
            return "Spreadsheet";
        case "mp3":
            return "Audio"
        case "pptx":
            return "Presentation";
        case "xml":
        case "html":
            return "Code";
        case "docx":
        case "odt":
        case "rtf":
        case "txt":
        case "pdf":   
        default:
            return "Document";
    }
}

//frontend type to backend code type
function inverseFileType(type) {
    switch (type) {
        case "Video":
            return ["rm", "mp4", "mv4", "mov", "avi", "mpg", "mpeg", "divx"];
        case "Spreadsheet":
            return ["ods", "xls", "xlsx"];
        case "Audio":
            return ["mp3"];
        case "Presentation":
            return ["pptx"];
        case "Code":
            return ["xml", "html"];
        case "Document":
            return ["docx", "odt", "rtf", "txt", "pdf"];
        default:
            return []
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