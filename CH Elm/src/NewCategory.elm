module NewCategory exposing (Model, Msg(..), initialModel, main, update, view)
--
import Browser
import Html exposing (Html, Attribute, div, input, text, button)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


-- MODEL
type alias Model =
  { 
    title : String
  }

initialModel : Model
initialModel = 
  {  title = "" }

-- UPDATE
type Msg
  = SetTitle String

update : Msg -> Model -> Model
update msg model =
  case msg of
    SetTitle newTitle ->
      { model | title = newTitle }


-- VIEW
renderAddButton: Model -> Html Msg
renderAddButton model =
    if model.title /= "" then
        div [] 
          [button [] [ text "Add"]]
    else
        div [] []

view : Model -> Html Msg
view model =
  div []
    [ 
      div[]
      [
        input 
        [ placeholder "New Category", 
          value model.title, 
          onInput SetTitle ] []
      ],
      div [] 
        [ text (model.title) ],
      renderAddButton model
    ]

-- MAIN
main : Program () Model Msg
main =
  Browser.sandbox { 
    init = initialModel, 
    update = update, 
    view = view 
  }