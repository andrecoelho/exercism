(ns bob
  (:require [clojure.string :as s]))

(defn response-for [question]
  (cond
    (s/blank? question) "Fine. Be that way!"
    (and
     (= question (s/upper-case question))
     (not (= question (s/lower-case question)))) "Whoa, chill out!"
    (s/ends-with? question "?") "Sure."
    :else "Whatever."))