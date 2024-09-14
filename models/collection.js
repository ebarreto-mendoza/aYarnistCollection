import mongoose, {Schema, models} from 'mongoose';

const collectionSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    yarn_type: {
        type: String,
        required: true,
    },
    yarn_weight: {
        type: String,
        required: true,
    },
    yarn_brand: {
        type: String,
        required: true,
    },
    yarn_name: {
        type: String,
        required: true,
    },
    yarn_lot:{
        type: String,
        required: true,
    },
    // Need care instructions and the amount user has
},
);

const Collection = models.Collection || mongoose.model("Collection", collectionSchema);

export default Collection;