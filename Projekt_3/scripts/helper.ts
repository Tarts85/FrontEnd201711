namespace Helper {
    console.log('helper.ts');
    // linkide loomine
    
    
    // emaili formaadiga 
    
    
    // templatede saamisega ja nende töötlusega
    export const formatEmails = (className: string,splitter : string) => {
        const emails = document.getElementsByClassName(className);
        for(let i = 0; i < emails.length;++i){
            const emailParts = emails.item(i).innerHTML.split(splitter);
            const email = `${emailParts[0]}@${emailParts[1]}`;
            const link =`<a href="mailto:${email}">${email}</a>`;
            emails.item(i).outerHTML = link;
        }
    }
    export const getHTMLTemplate = (file: string) => {
        let templateHTML = 'fail';
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if(this.readyState === 4 && this.status === 200) {
                templateHTML = this.responseText;
            }
        }
        xmlHttp.open('GET', file, false);
        xmlHttp.send();
        return templateHTML;
    }
    export const parseHTMLString = (target: string, mustache:string, content:string) => {
        return target.replace(mustache, content);
    }
}