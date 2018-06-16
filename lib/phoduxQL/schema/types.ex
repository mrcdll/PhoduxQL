defmodule PhoduxQL.Schema.Types do
  use Absinthe.Schema.Notation
  use Absinthe.Ecto, repo: PhoduxQL.Repo

  object :note do
    field :id, non_null(:id)
    field :name, non_null(:string)
    field :tasks, list_of(:task), resolve: assoc(:tasks)
  end

  object :task do
    field :id, non_null(:id)
    field :name, non_null(:string)
    field :description, non_null(:string)
    field :post, :note, resolve: assoc(:note)
  end

end