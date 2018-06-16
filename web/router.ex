defmodule PhoduxQL.Router do
  use PhoduxQL.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", PhoduxQL do
    pipe_through :api
  end
end
