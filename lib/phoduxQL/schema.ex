defmodule PhoduxQL.Schema do
  use Absinthe.Schema

  alias PhoduxQL.NoteResolver

  object :note do
    field :id, non_null(:id)
    field :name, non_null(:string)
  end

  query do
    field :all_notes, non_null(list_of(non_null(:note))) do
      resolve &NoteResolver.all_notes/3
    end
  end

  mutation do
    field :create_note, :note do
      arg :name, non_null(:string)
      resolve &NoteResolver.create_note/3
    end
  end

end