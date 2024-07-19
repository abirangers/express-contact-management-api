import contactService from "../service/contact-service";

const create = async (req, res, next) => {
    try {
        const user = req.user;
        const body = req.body;
        const result = await contactService.create(user, body);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error)
    }
}

const get = async (req, res, next) => {
    try {
        const user = req.user;
        const contactId = req.params.contactId;
        const result = await contactService.get(user, contactId);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const user = req.user;
        const contactId = req.params.contactId;
        const body = req.body;
        body.id = contactId;

        const result = await contactService.update(user, body);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const remove = async (req, res, next) => {
    try {
        const user = req.user;
        const contactId = req.params.contactId;

        const result = await contactService.remove(user, contactId);
        res.status(200).json({
            data: "OK"
        });
    } catch (error) {
        next(error);
    }
}

const search = async (req, res, next) => {
    try {
        const user = req.user;
        const body = {
            name: req.query.name,
            email: req.query.email,
            phone: req.query.phone,
            page: req.query.page,
            size: req.query.size
        };

        const result = await contactService.search(user, body);
        res.status(200).json({
            data: result.data,
            paging: result.paging
        });
    } catch (error) {
        next(error);
    }
}

export default {
    create,
    get,
    update,
    remove,
    search
}