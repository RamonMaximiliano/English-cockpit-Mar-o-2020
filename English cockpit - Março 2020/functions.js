function generate (){
    let gender1 =  window.document.getElementById("gender");
    let gendername1 =  window.document.getElementById("gendername");
    let action =  window.document.getElementById("action");
    let Channel =  window.document.getElementById("Channel");
    let status =  window.document.getElementById("status");
    let issue =  window.document.getElementById("issue");
    let product =  window.document.getElementById("product");
    let process =  window.document.getElementById("process");
    let department =  window.document.getElementById("department");
    let status2 =  window.document.getElementById("status2");
    let users =  window.document.getElementById("users");
    let dia =  window.document.getElementById("dia");
    let mes =  window.document.getElementById("mes");
    let ano =  window.document.getElementById("ano");
    let loss =  window.document.getElementById("loss");
    let connection2 =  window.document.getElementById("connection2");
    let contactgender =  window.document.getElementById("contactgender");
    let contactname =  window.document.getElementById("contactname");
    let contactnumber =  window.document.getElementById("contactnumber");

    let result =  window.document.getElementById("finaltext");

    result.innerHTML = `${gender1.value}${gendername1.value} contacted customer interaction center by ${Channel.value} to request a ${action.value}.


Business impact:
    
${issue.value}.
Issue is affecting a production system.
The system is ${status.value}.
SAP product being affected: ${product.value}.
Business process affected: ${process.value}.
Company's department affected: ${department.value}.
Is there a workaround available: ${status2.value}.    
Users being affected: ${users.value}.    
Deadline is: ${dia.value} of ${mes.value}, ${ano.value}      
Financial loss: ${loss.value}.
Is the remote connection opened? ${connection.value}

Contact person: ${contactgender.value} ${contactname.value}.
Phone number:${contactnumber.value}.`
}

/*aqui em baixo é a função da pagina 2*/


function generate2 () {

    let gender2 =  window.document.getElementById("gender2");
    let gendername2 =  window.document.getElementById("gendername2");
    let action2 =  window.document.getElementById("action2");
    let Channel2 =  window.document.getElementById("Channel2");
    let dia2 =  window.document.getElementById("dia2");
    let mes2 =  window.document.getElementById("mes2");
    let ano2 =  window.document.getElementById("ano2");
    let type2 =  window.document.getElementById("type2");
    let phase2 =  window.document.getElementById("phase2");
    let showstopper2 =  window.document.getElementById("showstopper2");
    let standstill2 =  window.document.getElementById("standstill2");
    let members2 =  window.document.getElementById("members2");
    let members3 =  window.document.getElementById("members3");
    let loss3 =  window.document.getElementById("loss3");
    let connection2 =  window.document.getElementById("connection2");
    let contactgender2 =  window.document.getElementById("contactgender2");
    let contactname2 =  window.document.getElementById("contactname2");
    let contactnumber2 =  window.document.getElementById("contactnumber2");





    let result2 =  window.document.getElementById("finaltext2");

    result2.innerHTML = `${gender2.value}${gendername2.value} contacted customer interaction center by ${Channel2.value} to request a ${action2.value}.
    
Business impact:

${type2.value} project.
The Go Live is on ${dia2.value} of ${mes2.value}, ${ano2.value}.
The project is in the ${phase2.value} phase.
Showstopper to Go Live: ${showstopper2.value}.
Project at standstill: ${standstill2.value}.
Internal project members affected: ${members2.value}.
External consultants: ${members3.value}.
Is there any financial loss? ${loss3.value}.
Is the remote connection opened? ${connection2.value}


Contact person: ${contactgender2.value} ${contactname2.value}.
Phone number:${contactnumber2.value}.`
}
