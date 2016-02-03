package com.xiaotian.servlet;

import java.beans.IntrospectionException;
import java.beans.PropertyDescriptor;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.xiaotian.bean.Person;

import net.sf.json.JSONArray;

public class PersonServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public PersonServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		this.doPost(request, response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		if(request.getParameter("method").equals("query")){
			this.query(request, response);
		}else if(request.getParameter("method").equals("deleteById")){
			this.deletePersonById(request, response);
		}else if(request.getParameter("method").equals("deleteByIds")){
			this.deletePersonByIdS(request, response);
		}else if(request.getParameter("method").equals("add")){
			this.add(request, response);
		}else{
			this.updateColumn(request, response);
		}
	}
	
	public void updateColumn(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
		Long pid = Long.parseLong(request.getParameter("id"));
		/**
		 * 列名
		 */
		String item = request.getParameter("item");
		/**
		 * 上面的列名对应的值
		 */
		String value = request.getParameter("value");
		
		List<Person> persons = (List<Person>)this.getServletContext().getAttribute("persons");
		for (int i = 0; i < persons.size(); i++) {
			if(persons.get(i).getPid().longValue()==pid.longValue()){
				try {
					PropertyDescriptor propertyDescriptor = new PropertyDescriptor(item, Person.class);
					propertyDescriptor.getWriteMethod().invoke(persons.get(i), value);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			}
		}
	}
	
	public void update(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
		Long pid = Long.parseLong(request.getParameter("id"));
		String name = request.getParameter("name");
		String description = request.getParameter("description");
		
		List<Person> persons = (List<Person>)this.getServletContext().getAttribute("persons");
		for (int i = 0; i < persons.size(); i++) {
			if(persons.get(i).getPid().longValue()==pid.longValue()){
				persons.get(i).setName(name);
				persons.get(i).setDescription(description);
				break;
			}
		}
	}
	
	public void add(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
		Long pid = Long.parseLong(request.getParameter("id"));
		String name = request.getParameter("name");
		String description = request.getParameter("description");
		Person person = new Person();
		person.setDescription(description);
		person.setName(name);
		person.setPid(pid);
		
		List<Person> persons = (List<Person>)this.getServletContext().getAttribute("persons");
		persons.add(person);
	}
	
	
	public void deletePersonById(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
		Long pid = Long.parseLong(request.getParameter("pid"));
		List<Person> persons = (ArrayList<Person>)this.getServletContext().getAttribute("persons");
		
		for (int i = 0; i < persons.size(); i++) {
			if(persons.get(i).getPid().longValue()==pid.longValue()){
				persons.remove(i);
			}
		}
	}
	
	public void deletePersonByIdS(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
		String[] ids = request.getParameter("ids").split(",");
		List<Person> persons = (ArrayList<Person>)this.getServletContext().getAttribute("persons");
		
		for (int i = 0; i < persons.size(); i++) {
			for (int j = 0; j < ids.length; j++) {
				String pid = ""+persons.get(i).getPid().longValue();
				if(pid.equals(ids[j])){//褰撳墠瑕侀亶鍘嗙殑person瀵硅薄姝ｅソ鏄鍒犻櫎鐨�
					persons.remove(i);
				}
			}
		}
	}
	
	private void query(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		List<Person> persons = (ArrayList<Person>)this.getServletContext().getAttribute("persons");
		
		//鎶�list瀵硅薄杞寲鎴怱tring瀛楃涓�
		String jsonStr = JSONArray.fromObject(persons).toString();
		response.getWriter().println(jsonStr);
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
