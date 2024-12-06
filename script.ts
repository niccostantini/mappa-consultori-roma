type LanguageData = {
    [key: string]: [string, string]
}
const languageData: LanguageData = {
    'en-GB': [
        "Disclaimer",
        "The data used in this map is directly sourced from the Salute Lazio database. INTERSOS is not responsible for any lack of accuracy."
    ],
    'en-US': [
        "Disclaimer",
        "The data used in this map is directly sourced from the Salute Lazio database. INTERSOS is not responsible for any lack of accuracy."
    ],
    'en-IN': [
        "Disclaimer",
        "The data used in this map is directly sourced from the Salute Lazio database. INTERSOS is not responsible for any lack of accuracy."
    ],
    'it': [
        "Disclaimer",
        "I dati utilizzati in questa mappa sono direttamente presi dal database Salute Lazio. INTERSOS non è responsabile per eventuali imprecisioni."
    ],
    'es': [
        "Aviso Legal",
        "Los datos utilizados en esta mapa provienen directamente de la base de datos de Salute Lazio. INTERSOS no se hace responsable de la falta de precisión."
    ],
    'ar': [
        "تنويه",
        "البيانات المستخدمة في هذه الخريطة مأخوذة مباشرة من قاعدة بيانات الإقليم لاتسيو. لا تتحمل إنترسوس أي مسؤولية عن أي نقص في الدقة."
    ],
    'fa': [
        "سلب مسئولیت",
        "داده‌های استفاده شده در این نقشه مستقیماً از پایگاه داده سالوته لازيو گرفته شده است. إنترسوس مسئولیتی در قبال هرگونه عدم دقت ندارد"
    ],
    'fr': [
        "Avertissement",
        "Les données utilisées dans cette carte proviennent directement de la base de données Salute Lazio. INTERSOS n'est pas responsable de toute inexactitude."
    ],
    'sq': [
        "Mohim",
        "Të dhënat e përdorura në këtë hartë janë marrë direkt nga baza e të dhënave Salute Lazio. INTERSOS nuk është përgjegjës për ndonjë mungesë saktësie."
    ],
    'bn': [
        "দাবি পরিত্যাগ",
        "এই মানচিত্রে ব্যবহৃত ডেটা সরাসরি Salute Lazio ডেটাবেস থেকে নেওয়া হয়েছে। INTERSOS কোনো তথ্যের অযথার্থতার জন্য দায়ী নয়।"
    ]
};

function getUserLanguage(): string {
    if (!(navigator.language in languageData) || !(navigator.userLangue in languageData)) {
        return 'en-GB'; // Fallback to default language
    }
    return navigator.language || navigator.userLanguage
}

function populateDialog(dialog: HTMLDialogElement): void {
    let language: string = getUserLanguage();
    let container = document.createElement('div');
    let dialogTitle: HTMLHeadingElement = document.createElement('h2');
    let dialogText: HTMLParagraphElement = document.createElement('p');
    dialogText.style.textAlign = (language === 'ar' || language === 'fa') ? 'right' : 'left';
    let dialogCloseButton: HTMLButtonElement = document.createElement('button');
    dialogTitle.textContent = languageData[language][0];
    dialogText.textContent = languageData[language][1];
    dialogCloseButton.textContent = "OK";
    dialog.appendChild(container);
    container.appendChild(dialogTitle);
    container.appendChild(dialogText);
    container.appendChild(dialogCloseButton);
    dialogCloseButton.addEventListener('click', () => dialog.close());
}

function openDialog(dialog: HTMLDialogElement | null): void {
    if (dialog) {
        populateDialog(dialog);
        dialog.showModal();
    } else {
        console.error("HTMLDialogElement not found!");
    }
}

document.addEventListener('DOMContentLoaded', (): void => {
    const dialog = document.querySelector<HTMLDialogElement>('#langDialog');
    openDialog(dialog);
});