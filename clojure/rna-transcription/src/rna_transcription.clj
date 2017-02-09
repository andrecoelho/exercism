(ns rna-transcription)

(def transkeys {\G "C" \C "G" \T "A" \A "U"})

(defn to-rna [strand]
  (assert (re-find #"^[GCTA]+$" strand))
  (apply str (map transkeys strand)))