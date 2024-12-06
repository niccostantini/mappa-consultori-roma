"use strict";
const languageData = {
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
    'it-IT': [
        "Disclaimer",
        "I dati utilizzati in questa mappa sono direttamente presi dal database Salute Lazio. INTERSOS non è responsabile per eventuali imprecisioni."
    ],
    'es-ES': [
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
function getUserLanguage() {
    return navigator.language;
}
function populateDialog(dialog) {
    let language = getUserLanguage();
    console.log(language);
    if (!(language in languageData)) {
        language = 'en-GB'; // Fallback to default language
    }
    let container = document.createElement('div');
    let dialogTitle = document.createElement('h2');
    let dialogText = document.createElement('p');
    dialogText.style.textAlign = (language === 'ar' || language === 'fa') ? 'right' : 'left';
    let dialogCloseButton = document.createElement('button');
    dialogCloseButton.textContent = "OK";
    dialogTitle.textContent = languageData[language][0];
    dialogText.textContent = languageData[language][1];
    dialog.appendChild(container);
    container.appendChild(dialogTitle);
    container.appendChild(dialogText);
    container.appendChild(dialogCloseButton);
    dialogCloseButton.addEventListener('click', () => dialog.close());
}
function openDialog(dialog) {
    if (dialog) {
        populateDialog(dialog);
        dialog.showModal();
    }
    else {
        console.error("HTMLDialogElement not found!");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.querySelector('#langDialog');
    openDialog(dialog);
});
