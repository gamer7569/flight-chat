define(function() {
  this["Templates"] = this["Templates"] || {};
  this["Templates"]["templates/chat_link.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<a href=\"chatView\" class=\"chat-link js-view-link ");_.b(_.v(_.f("active",c,p,0)));_.b("\" id=\"");_.b(_.v(_.f("conversationId",c,p,0)));_.b("\">");_.b("\n" + i);_.b("  <img src=\"");_.b(_.v(_.f("userImageUrl",c,p,0)));_.b("\" class=\"chat-message-author\" />");_.b("\n" + i);_.b("  <div class=\"chat-user-name\">");_.b(_.v(_.f("userName",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("  <div class=\"chat-message-text\">");_.b(_.v(_.f("text",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("  <div class=\"arrow-right\"></div>");_.b("\n" + i);_.b("</a>");return _.fl();;});
  this["Templates"]["templates/chat_message.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"chat-message ");_.b(_.v(_.f("self",c,p,0)));_.b("\" id=\"");_.b(_.v(_.f("_id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("  <img src=\"");_.b(_.v(_.f("imageUrl",c,p,0)));_.b("\" class=\"chat-message-author\" />");_.b("\n" + i);_.b("  <div class=\"chat-message-text\">");_.b(_.v(_.f("text",c,p,0)));_.b("</div>");_.b("\n" + i);if(_.s(_.f("notSent",c,p,1),c,p,0,168,986,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <div class=\"chat-message-not-sent\">");_.b("\n" + i);_.b("      <form class=\"chat-re-emit-input\" data-event=\"uiReEmitMessage\">");_.b("\n" + i);_.b("        <input type=\"hidden\" name=\"_id\" value=\"");_.b(_.v(_.f("_id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("        <input type=\"hidden\" name=\"conversationId\" value=\"");_.b(_.v(_.f("conversationId",c,p,0)));_.b("\">");_.b("\n" + i);_.b("        <button type=\"submit\"><img src=\"img/spinner-white.png\" class=\"animRotateRound\"></button>");_.b("\n" + i);_.b("      </form>");_.b("\n" + i);_.b("      ");_.b("\n" + i);_.b("      <script type=\"text/javascript\">");_.b("\n" + i);_.b("        (function() {");_.b("\n" + i);_.b("          setTimeout(function(){");_.b("\n" + i);_.b("            var $form = $('#'+");_.b(_.v(_.f("_id",c,p,0)));_.b(").find('.chat-re-emit-input');");_.b("\n" + i);_.b("            if ($form.length > 0) {");_.b("\n" + i);_.b("              $form.find('button').addClass('red').html(");_.b("\n" + i);_.b("                '<span class=\"retry\">retry</span>' +");_.b("\n" + i);_.b("                '<span class=\"arrow-right\"></span>'");_.b("\n" + i);_.b("              );");_.b("\n" + i);_.b("            }");_.b("\n" + i);_.b("          }, 10000);");_.b("\n" + i);_.b("        })();");_.b("\n" + i);_.b("      </script>");_.b("\n" + i);_.b("    </div>");_.b("\n");});c.pop();}_.b("</div>");return _.fl();;});
  this["Templates"]["templates/chat_view.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"chat\">");_.b("\n" + i);_.b("  <div class=\"chat-messages\" id=\"chatMessages\">");_.b("\n" + i);_.b("    <div class=\"header-space\"></div>");_.b("\n" + i);_.b("    <!-- chat_message.html -->");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("  <form class=\"chat-input\" data-event=\"uiEmitMessage\" data-reset=\"true\">");_.b("\n" + i);_.b("    <input type=\"text\" name=\"text\" value=\"\" placeholder=\"Send a message...\">");_.b("\n" + i);_.b("    <input type=\"hidden\" name=\"conversationId\" value=\"");_.b(_.v(_.f("conversationId",c,p,0)));_.b("\">");_.b("\n" + i);_.b("    <button type=\"submit\"><div class=\"arrow-right\"></div></button>");_.b("\n" + i);_.b("    <button href=\"imageUploaderView\" class=\"js-view-link\">img</button>");_.b("\n" + i);_.b("  </form>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<header class=\"main-header\">");_.b("\n" + i);_.b("  <a href=\"back\" class=\"js-view-link\"><span class=\"arrow-left\"></span></a>");_.b("\n" + i);_.b("</header>");_.b("\n");return _.fl();;});
  this["Templates"]["templates/login_view.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div id=\"signinPage\" class=\"app-page\">");_.b("\n" + i);_.b("  <div class=\"display-table\">");_.b("\n" + i);_.b("    <form data-event=\"dataUserLogin\">");_.b("\n" + i);_.b("      <img src=\"img/logo.png\" class=\"logo\" alt=\"Flight-chat logo\">");_.b("\n" + i);_.b("      <br>");_.b("\n" + i);_.b("      <input type=\"text\" placeholder=\"Name\" name=\"name\">");_.b("\n" + i);_.b("      <br>");_.b("\n" + i);_.b("      <button type=\"submit\">Enter</button>");_.b("\n" + i);_.b("      <p class=\"error\"></p>");_.b("\n" + i);_.b("    </form>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
  return this["Templates"];
});