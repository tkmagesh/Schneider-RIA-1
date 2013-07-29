using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Fleck;

namespace SchneiderSocketServerHost
{
    class Program
    {
        static void Main(string[] args)
        {
            var connections = new List<IWebSocketConnection>();
            var server = new WebSocketServer("ws://localhost:9090/SchneiderServer");
            server.Start(con =>
                {
                    con.OnOpen += () =>
                        {
                            connections.Add(con);
                            Console.WriteLine("A new connection is established");
                        };
                    con.OnClose += () =>
                        {
                            connections.Remove(con);
                            Console.WriteLine("An existing connection is closed");
                        };
                    con.OnMessage += s =>
                        {
                            Console.WriteLine("Message received - [{0}]", s);
                            connections.ForEach(connection =>
                                {
                                    if (connection != con)
                                        connection.Send(s);
                                });
                        };
                });
            var input = string.Empty;
            Console.WriteLine("Server running.... Type any text to send to client or EXIT to shutdown");
            while ((input = Console.ReadLine()).ToUpper() != "EXIT")
            {
                connections.ForEach(con => con.Send(input));
            }
            Console.ReadLine();
            Console.WriteLine("Server shutdown... ");
        }
    }

    public static class MyUtils
    {
        public static void ForEach<T>(this IEnumerable<T> list, Action<T> action)
        {
            foreach (var item in list)
            {
                action(item);
            }
        }
    }
}
