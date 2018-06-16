defmodule PhoduxQL.Router do
  use PhoduxQL.Web, :router

  pipeline :api do
    plug CORSPlug, origin: ["http://localhost:3000", "http://localhost:8000"]
    plug :accepts, ["json"]
  end

  scope "/" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: PhoduxQL.Schema,
      interface: :simple,
      context: %{pubsub: PhoduxQL.Endpoint}
  end
end
