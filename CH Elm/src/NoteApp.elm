module NoteApp exposing (main)

import Browser
import Html exposing 
    (Html, button, div, text, br, button, span)
import Html.Events exposing (onClick)
import Json.Decode
import Http
import Note as P exposing (Note)
import Category as C exposing (Category)

type RequestState
    = None
    | Pending
    | Success
    | Failure

type alias Model = 
    { 
        notes: List Note, 
        categories: List Category,
        selectedCategory: Category,
        requestState: RequestState, 
        error: Maybe String 
    }

initialModel : Model
initialModel =
    { 
        notes = [],
        categories = [],
        selectedCategory = { id = 0, name = "" },
        requestState = None,  
        error = Nothing 
    }

init: (Model, Cmd Msg)
init =
    (initialModel, Cmd.batch [fetchNotes, fetchCategories])

-- MESSAGES

type Msg
    = FetchNotesStart
    | FetchCategoriesStart
    | FetchNotesEnd (Result Http.Error (List Note))
    | FetchCategoriesEnd (Result Http.Error (List Category))
    | SelectCategory Category

-- COMMANDS
fetchNotes: Cmd Msg
fetchNotes =
        Http.get
            { url = "http://localhost:3001/notes"
            , expect = Http.expectJson 
                FetchNotesEnd P.collectionDecoder 
            }

fetchCategories: Cmd Msg
fetchCategories =
        Http.get
            { url = "http://localhost:3001/categories"
            , expect = Http.expectJson 
                FetchCategoriesEnd C.collectionDecoder 
            }


-- UPDATE

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
         FetchNotesStart ->
            ( 
                { model | requestState = Pending }, 
                fetchNotes
            )
            
         FetchNotesEnd result ->
            case result of
                Ok notes ->
                    ( 
                        { model | requestState = Success, notes = notes }, 
                        Cmd.none 
                    )

                Err _ ->
                    ( 
                        { model | requestState = Failure, error = Just "Error" }, 
                        Cmd.none 
                    )
        
         SelectCategory selectedCategory ->
            ( 
                { model | selectedCategory = selectedCategory }, 
                Cmd.none 
            )

         FetchCategoriesStart ->
            ( 
                { model | requestState = Pending }, 
                fetchCategories 
            )

         FetchCategoriesEnd result ->
            case result of
                Ok newList ->
                    ( 
                        { model | requestState = Success, categories = newList }, 
                        Cmd.none 
                    )

                Err _ ->
                    (
                        { model | requestState = Failure, error = Just "Error" }, 
                        Cmd.none 
                    )


-- VIEW

renderNoteItem: Note -> Html Msg
renderNoteItem note =
    div [] [
        div [] [ text note.title ],
        div [] [ text note.content ],
        br [] []
    ]
    
renderBoard: Model -> Html Msg
renderBoard model =
    case model.requestState of
        None ->
            div [] []

        Pending ->
            div [] [text "Loading..."]
            
        Success -> 
          div [] ( 
            model.notes
                |> List.filter (\p -> 
                    p.categoryID == model.selectedCategory.id)
                |> List.map renderNoteItem 
          )
          
        Failure ->
            case model.error of 
                Just error -> 
                    span [] [text error]

                Nothing ->
                    span [] []

---
renderCategoryItem: Category -> Category -> Html Msg
renderCategoryItem item selectedItem =
    if item.id == selectedItem.id then
        div [] [
            span [] [text item.name]
        ]
    else
        div [] [
            button 
                [ onClick (SelectCategory item)] 
                [ text item.name ]
        ]
    
renderCategoryList: Model -> Html Msg
renderCategoryList model =
    case model.requestState of
        None ->
            div [] []

        Pending ->
            div [] [text "Loading..."]
            
        Success -> 
            div [] (
                model.categories
                |> List.map (\item -> 
                    renderCategoryItem item model.selectedCategory) 
            )
          
        Failure ->
            case model.error of 
                Just error -> 
                    span [] [text error]

                Nothing ->
                    span [] []

view : Model -> Html Msg
view model =
    div []
        [
            button 
                [onClick FetchNotesStart] 
                [text "Fetch All Notes"],
            button 
                [onClick FetchCategoriesStart] 
                [text "Fetch All Categories"],
            renderCategoryList model,
            renderBoard model
        ]

-- MAIN

main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }