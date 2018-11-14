package cc.openhome;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "UppeEcho", urlPatterns = {"/UpperEcho"})
public class UpperEcho extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String text = request.getParameter("text");
        if(text != null && text.trim().length() != 0) {
            request.setAttribute("echoTime", new Date());
            request.setAttribute("echoText", text.toUpperCase());
            if(request.getParameter("json") != null) {
                request.getRequestDispatcher("echoJSON.jsp").forward(request, response);            
            } else {
                request.getRequestDispatcher("echo.jsp").forward(request, response);            
            }
        } else {
            request.setAttribute("error", "No text inputed");
            request.getRequestDispatcher("index.jsp").forward(request, response);            
        }
    }
}
