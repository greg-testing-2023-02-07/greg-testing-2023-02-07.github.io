(module count g

  (defcap g () 1)
  (defschema count-schema i:integer)
  (deftable count-table:{count-schema})

  (defun increment-counter:integer (id:string)
    "Increment a counter"

    (let* ((old_value (read count-table id ['i]))
           (new_value {"i": (+ (at 'i old_value) 1)})
          )
     (update count-table id new_value)
     new_value
   )

  )
)

(create-table count-table)
(insert count-table "greg" {"i": 0})
