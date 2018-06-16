defmodule PhoduxQL.Schema do
  use Absinthe.Schema
  import_types PhoduxQL.Schema.Types

  alias PhoduxQL.NoteResolver


  query do
    field :all_notes, list_of(:note) do
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