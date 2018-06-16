defmodule PhoduxQL.NoteResolver do
  alias PhoduxQL.{Repo,Note}

  def all_notes(_root, _args, _info) do
    {:ok, Repo.all(Note)}
  end

  def create_note(_root, %{name: name}, _info) do
    case create_note(name) do
      {:ok, note} ->
        {:ok, note}
      _error ->
        {:error, "could not create note"}
    end
  end

  def create_note(name) do
    {:ok, %Note{name: name} |> Repo.insert!}
  end

end