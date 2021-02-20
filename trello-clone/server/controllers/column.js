const Column = require("../models/column");
const User = require("../models/user");
exports.postColumn = (req, res, next) => {
    const title = req.body.title
    // const title = "Hello there"
    const col = new Column({
            title: title,
            items: [],
            userId: req.user
    })
    col.save()  
        .then(result => {
            res.send("Data added")
        })  
        .catch(err => res.send(err.message))
}

exports.getColums = (req, res, next) => {
    Column.find()
        .then(col => {
            res.send(col)
        })
        .catch(err => res.statut(404).send(err.message))
}

exports.postColumnSwop = (req, res, next) => {
    const id = req.body;
    const itemCopy = req.body.itemCopyt
    const srcDroppableId = id.srcDroppableId._id;
    const destDroppableId = id.destDroppableId._id
    const srcIndex = id.srcIndex;
    Column.findByIdAndUpdate(
        srcDroppableId, {$pull: {items : {_id: itemCopy._id}}}, { safe: true, upsert: true }
    ).then(() => {
        Column.findByIdAndUpdate(
            destDroppableId, {$push: {items : itemCopy}}, { safe: true, upsert: true }
        ).then(response => res.send("Good")) 
        .catch(err => res.statut(404).send(err.message))
    })



}

exports.postNewCard = (req, res, next) => {
    const id = req.body.idCol;
    const newItem = req.body.newItem;

    Column.findByIdAndUpdate(
        id, {$push: {items: newItem}}, { safe: true, upsert: true }
    ).then(result => res.send("Item added"))
    .catch(err => res.statut(404).send(err.message))
}

exports.postUpdateCard = (req, res, next) => {
    const colId = req.body.colId;
    const completeItem = req.body.completeItem;
    const completeItemId = completeItem.id
    const completeItemName = completeItem.name
    const completeItemTags = completeItem.tags

    Column.findOneAndUpdate({_id: colId, items: {$elemMatch:{id: completeItemId}}},
                            {$set: {"items.$.name": completeItemName,
                                    "items.$.tags": completeItemTags}},
                            {'new': true, 'safe': true, 'upsert': true})
                            .then(resp => res.send("UpdatedItem"))
}

exports.postDeleteCard = (req, res, next) => {
    const colId = req.body.colId;
    const itemId = req.body.itemId;

    Column.findByIdAndDelete({_id: colId, items: {$elemMatch:{id: itemId}}},
        {'safe': true})
        .then(resp => res.send("UpdatedItem"))
}
