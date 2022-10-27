const ask = (question, yes, no) => (confirm(question)) ? yes(): no();
ask (
    "Ви згодні?",
     ( ) => { alert ("Ви погодилися."); },
    ( ) => { alert ("Ви скасували виконання."); }
);