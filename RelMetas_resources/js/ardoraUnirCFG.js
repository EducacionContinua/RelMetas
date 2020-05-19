//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0080FF"; colorText="#000000"; colorSele="#FF80C0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Lo lograste, no olvides tomar captura de pantalla!"; messageTime=""; messageError="Revisa tus respuestas"; messageErrorG="Revisa tus respuestas"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UmVsTWV0YXM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["RXhjZWxlbmNpYSBhY2Fk6W1pY2E", "SW5jb3Jwb3JhciBlbCBNb2RlbG8gSWduYWNpYW5vIHBvciBDb21wZXRlbmNpYXM"],["T2ZlcnRhIGFjYWTpbWljYQ", "SW50cm9kdWNpciBwbGF0YWZvcm1hIGVkdWNhdGl2YSBwYXJhIGVkdWNhY2nzbiBzZW1pcHJlc2VuY2lhbA"],["RWNvbG9n7WEgZGUgc2FiZXJlcw", "RGl2ZXJzaWZpY2FyIGVsIHNpc3RlbWEgZGUgZXN0YWTtYSBwcm9mZXNpb25hbGVzIGVuIGFjdWVyZG8gY29uIGluZHVzdHJpYXMgZSBpbnN0aXR1Y2lvbmVzIGRlbCBzZWN0b3Igc29jaWFsIHkgZGUgc2VydmljaW9zIGVuIHRyZXMgbW9kYWxpZGFkZXM6IGEpIGFwcmVuZGVyIGhhY2llbmRvLCBiKSByZWZsZXhpb25hciB5IGVudGVuZGVyIGxvIHF1ZSBzZSBoYWNlLCBjKSBhcGxpY2FyIGNvbm9jaW1pZW50b3M"],["TWVkaW8gdW5pdmVyc2l0YXJpbw", "SW5zdGF1cmFyIGVsIG1vZGVsbyBkZSB0dXRvcu1hcyBjb24gb3JpZW50YWNp824gcHNpY29wZWRhZ/NnaWNhIHkgcmVkdWNpciBlbiAyMCUgbGEgZGVzZXJjafNuIGVzY29sYXI"],["SW52ZXN0aWdhY2nzbiAtIGFjY2nzbg", "UHJvcGljaWFyIGVsIHVzbyBkZSBsb3MgbGFib3JhdG9yaW9zIHBlc2Fkb3MgeSBsaWdlcm9zIHBhcmEgcHJveWVjdG9zIGRlIGludmVzdGlnYWNp824tIGFjY2nzbg"],["QWxpYW56YXMgZXN0cmF06WdpY2FzIHkgY29tdW5pY2FjafNuIGluc3RpdHVjaW9uYWw", "TWFudGVuZXIgeSBzb3N0ZW5lciBpbmZvcm1hY2nzbiBhY3R1YWxpemFkYSBlbiBw4WdpbmEgd2ViIHkgcmVkZXMgc29jaWFsZXM"],["QWNjZXNv", "QWJyaXIgbWF0cu1jdWxhIGEgdHJlc2NpZW50b3MgZXN0dWRpYW50ZXMgZW4gTGljZW5jaWF0dXJhIG8gSW5nZW5pZXLtYSBlbiBsYXMgbW9kYWxpZGFkZXMgc2VtaXByZXNlbmNpYWxlcyAoNzAlIHRl83JpY28sIDMwJSBwcuFjdGljbyk"],["QWRtaW5pc3RyYWNp824", "Q29udGFyIGNvbiB1biBSZWdsYW1lbnRvIGRlIFBlcnNvbmFsIEFjYWTpbWljbyBxdWUgaW50cm9kdXpjYSBjYXRlZ29y7WFzLg"],["SW5zdGl0dWNpb25hbA", "TG9ncmFyIHVuIHByb2Nlc28gZGUgcGxhbmVhY2nzbi0gaW1wbGVtZW50YWNp824gZGUgbGEgdHJhbnNpY2nzbiAoMjAxNy0yMDIxKSBwYXJhIGluY29ycG9yYXJzZSBlbiBlbCBwcm9jZXNvIGRlIHBsYW5lYWNp824gZGUgbGFyZ28gcGxhem8gMjAyMC0yMDMw"],["VmluY3VsYWNp824gdW5pdmVyc2l0YXJpYQ", "TG9ncmFyIGxhIGNvbG9jYWNp824gZGVsIDEwMCUgZGUgZXN0dWRpYW50ZXMgZW4gc3VzIGVzdGFk7WFzIHByb2Zlc2lvbmFsZXMgZGUgVOljbmljbyBTdXBlcmlvciBVbml2ZXJzaXRhcmlv"]];
var c=[[20,47],[16,61],[19,233],[19,101],[22,94],[50,74],[6,134],[14,73],[13,147],[25,108]];
var con1=["Excelencia académica","Oferta académica","Ecología de saberes","Medio universitario","Investigación - acción","Alianzas estratégicas y comunicación institucional","Acceso","Administración","Institucional","Vinculación universitaria"];
var con2=["Incorporar el Modelo Ignaciano por Competencias","Introducir plataforma educativa para educación semipresencial","Diversificar el sistema de estadía profesionales en acuerdo con industrias e instituciones del sector social y de servicios en tres modalidades: a) aprender haciendo, b) reflexionar y entender lo que se hace, c) aplicar conocimientos","Instaurar el modelo de tutorías con orientación psicopedagógica y reducir en 20% la deserción escolar","Propiciar el uso de los laboratorios pesados y ligeros para proyectos de investigación- acción","Mantener y sostener información actualizada en página web y redes sociales","Abrir matrícula a trescientos estudiantes en Licenciatura o Ingeniería en las modalidades semipresenciales (70% teórico, 30% práctico)","Contar con un Reglamento de Personal Académico que introduzca categorías.","Lograr un proceso de planeación- implementación de la transición (2017-2021) para incorporarse en el proceso de planeación de largo plazo 2020-2030","Lograr la colocación del 100% de estudiantes en sus estadías profesionales de Técnico Superior Universitario"];
var sel1=""; join1=[]; join2=[];
