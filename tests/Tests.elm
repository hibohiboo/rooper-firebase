module Tests exposing (..)

import Test exposing (..)
import Expect


exampleTest : String -> String -> (() -> Expect.Expectation)
exampleTest s ast =
    \_ ->
        Expect.equal ast s


all : Test
all =
    describe "てすとぐるーぷ１"
        [ test "てすと１" (exampleTest "て" "て")
        ]

